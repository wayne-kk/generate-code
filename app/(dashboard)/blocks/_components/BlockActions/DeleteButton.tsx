import { Button } from '@/_components/@ui/button';
import { blocksManage } from '../../_store';
import { useBlockActions } from '../../_hooks/useBlockActions';
import { Source } from '../BlockTabs/SourceTabs';

interface DeleteButtonProps {
    source: Source
}   

const DeleteButton = ({ source }: DeleteButtonProps) => {
    const { deleteBlockData } = useBlockActions();

    return (
        <Button
            variant="destructive"
            className="w-full mb-2"
            onClick={async () => {
                const selectedBlockId = blocksManage.getSelectedBlockId()
                await deleteBlockData(source, selectedBlockId!)
                blocksManage.setSelectedBlockId(null)
            }}
        >
            删除组件
        </Button>
    );
};

export default DeleteButton;
