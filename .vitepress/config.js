import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Jasmine CMS",
    description: "A Laravel based CMS",
    srcDir: './guide',
    outDir: './docs',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/assets/logo.svg',
        search: {
            provider: 'local'
        },

        nav: [
            {text: 'Home', link: '/'},
            {text: 'Docs', link: '/getting-started'}
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    {text: 'Installation', link: '/getting-started'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/JasmineCMS'}
        ]
    }
})
