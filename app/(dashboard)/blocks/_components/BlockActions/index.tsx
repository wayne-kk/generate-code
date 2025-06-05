import { Source } from '../BlockTabs/SourceTabs';
import CreateButton from './CreateButton';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

interface BlockActionsProps {
    source: Source;
    selectedBlockId: string | null;
}

const BlockActions = ({
    source,
    selectedBlockId,
}: BlockActionsProps) => {

    if (!selectedBlockId) return null;
    return (
        <>
            {source === 'aigcode_blocks' && (
                <>
                    <CreateButton
                        source={source}  
                        isCopy={true}
                    />
                    <UpdateButton source={source} />
                    <DeleteButton source={source} />
                </>
            )}
            {
                source === 'backend_blocks' && (
                    <>
                        <UpdateButton source={source} />
                        <DeleteButton source={source} />
                    </>
                )
            }
        </>
    );
};

export default BlockActions;
