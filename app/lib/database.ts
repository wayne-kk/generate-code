import supabase from './supabase';


export async function searchBlocksRandomly(keyword: string) {
  // 查询 blocks 表，使用 ilike 进行模糊匹配
  const { data, error } = await supabase
    .from('blocks')  // 查询 blocks 表
    .select('*')
    .ilike('name', `%${keyword}%`);  // 模糊匹配 name 字段

  if (error) {
    console.error('Error querying blocks:', error.message);
    return null;
  }

  // 如果没有匹配的结果，返回 null
  if (!data || data.length === 0) return null;

  // 获取一个随机索引
  const randomIndex = Math.floor(Math.random() * data.length);
  console.log('Matched Length:', data.length);

  // 返回随机的 block
  return data[randomIndex];
}
