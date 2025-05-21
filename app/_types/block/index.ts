export type BlocksMap = Record<string, Block>;

export interface Block {
    source_id: string | null;
    id: string;
    name: string;
    code: string | null;
    props: any | null;
    created_at?: string;
    type: string;
}