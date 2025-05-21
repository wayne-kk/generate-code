import { Block } from "@/_types/block";
import { BaseEventEmitter } from "@/_event/baseEventEmitter";

// 定义 BlockManage 的事件映射
interface BlockManageEvents {
    blocksChange: boolean;
    blockSelected: boolean
    blockTypeChange: string | null
}
class BlocksManage extends BaseEventEmitter<BlockManageEvents> {
    private static instance: BlocksManage;
    _blocks: Block[];
    selectedBlockId: string | null = null;
    _selectedType: string | null = null;
    sourceId: string | null = null;
    code: string | null = null;
    oldCode: string | null = null;
    _blocksMap: { [key: string]: Block; } = {};
    constructor(blocks: Block[]) {
        super()
        this._blocks = blocks;
    }

    init(blocks: Block[]) {
        this._blocks = blocks
        this._blocks.forEach((block) => {
            this._blocksMap[block.id] = block;
        });
        console.log('blocksManage init', this._blocksMap)
    }


    static getInstance(blocks: Block[]): BlocksManage {
        if (!BlocksManage.instance) {
            BlocksManage.instance = new BlocksManage(blocks);
        }
        return BlocksManage.instance;
    }


    get blocksMap() {
        return this._blocksMap;
    }

    get blocks() {
        return Object.values(this._blocksMap);
    }

    addBlock(block: Block) {
        this._blocksMap[block.id] = block;
        this.emit('blocksChange', true);
    }

    removeBlock(blockId: string) {
        delete this._blocksMap[blockId];
        this.emit('blocksChange', true);
    }

    updateBlock(blockId: string, block: Block) {
        this.blocksMap[blockId] = block;
    }

    setSelectedBlockId(id: string | null) {
        if (!id) {
            this.selectedBlockId = null;
            this.code = null;
            this.oldCode = null;
            this.emit('blockSelected', false);
            return;
        }
        this.selectedBlockId = id;
        // 执行
        this.code = this.blocksMap[id!].code;
        this.oldCode = this.blocksMap[id!].code;
        this.selectedType = this.blocksMap[id!].type;
        this.emit('blockSelected', true);
    }

    set selectedType(type: string | null) {
        this._selectedType = type;
        this.emit('blockTypeChange', type);
    }

    get selectedType() {
        return this._selectedType;
    }

    setCode(code: string | null) {
        this.code = code;
    }

    setOldCode(code: string | null) {
        this.oldCode = code;
    }

    getSelectedBlock() {
        return this.blocksMap[this.selectedBlockId!];
    }

    getCode() {
        return this.code;
    }

    getOldCode() {
        return this.oldCode;
    }

    getSelectedBlockId() {
        return this.selectedBlockId;
    }

}

export const blocksManage = BlocksManage.getInstance([]);