import { defineConfig, loadEnv, mergeConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig(async (env) => {
  const { command, mode } = env
  const internalPlugins = [
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    react(),
  ]

  if (command === 'build') {
    const { nitro } = await import('nitro/vite')
    internalPlugins.push(
      nitro({
        preset: "vercel",
        output: {
          dir: "dist",
          serverDir: "dist/server",
          publicDir: "dist/client",
        },
      })
    )
  }

  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_")
  const envDefine = Object.fromEntries(
    Object.entries(loadedEnv).map(([key, value]) => [
      `import.meta.env.${key}`,
      JSON.stringify(value),
    ])
  )

  const config = {
    define: envDefine,
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins: internalPlugins,
    server: {
      allowedHosts: true,
      host: '0.0.0.0',
    },
    preview: {
      allowedHosts: true,
    },
  }

  if (command === 'serve') {
    return mergeConfig(
      { server: { host: '::', port: 8080 } },
      config
    )
  }

  return config
})

