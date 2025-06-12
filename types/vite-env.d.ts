/// <reference types="vite/client" />

interface ImportMeta {
    readonly glob: (pattern: string) => Record<string, () => Promise<any>>;
    readonly globEager: (pattern: string) => Record<string, any>;
}