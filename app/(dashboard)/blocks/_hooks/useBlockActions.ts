import { toast } from 'sonner';
import { blocksManage } from '../_store';

export function useBlockActions() {
    const updateBlockData = async (blockData: any) => {
        try {
            const res = await fetch(`/api/aigcode-blocks/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blockData),
            });

            const result = await res.json();
            if (res.ok) {
                toast.success('组件更新成功');
                blocksManage.addBlock({ ...blockData, name: result.finalName })
                return { success: true, data: result.data, finalName: result.finalName };
            } else {
                toast.error(result.error || '组件更新失败');
                return { success: false, error: result.error };
            }
        } catch (err) {
            toast.error('请求失败');
            return { success: false, error: '请求失败' };
        }
    };

    const deleteBlockData = async (id: string) => {
        try {
            const res = await fetch(`/api/aigcode-blocks/delete`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });

            const result = await res.json();
            if (res.ok) {
                toast.success('组件删除成功');
                blocksManage.removeBlock(id)
                return { success: true, data: result.data };
            } else {
                toast.error(result.error || '组件删除失败');
                return { success: false, error: result.error };
            }
        } catch (err) {
            toast.error('请求失败');
            return { success: false, error: '请求失败' };
        }
    };

    return {
        updateBlockData,
        deleteBlockData,
    };
}
