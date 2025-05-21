import { useBlockActions } from '../../_hooks/useBlockActions';
import CreateButton from './CreateButton';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

interface BlockActionsProps {
    source: 'blocks' | 'aigcode-blocks' | 'backend-blocks';
    selectedBlockId: string | null;
}

const BlockActions = ({
    source,
    selectedBlockId,
}: BlockActionsProps) => {



    if (!selectedBlockId) return null;

    return (
        <>
            {source === 'blocks' && (
                <CreateButton />
            )}

            {source === 'aigcode-blocks' && (
                <>
                    <CreateButton
                        isCopy={true}
                    />
                    <UpdateButton />
                    <DeleteButton />
                </>
            )}
        </>
    );
};

export default BlockActions;
