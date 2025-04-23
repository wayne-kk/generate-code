import { nanoid } from 'nanoid';
import supabase from './supabase';

/**
 * 通过 Hero / Navigation / Footer 等关键字随机查询 blocks 表 并随机返回一条block数据
 * @param keyword 
 * @returns 
 */
export async function getRandomBlockByKeyword(keyword: string) {
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

/**
 * 通过 blockId 查询 blocks 表，获取具体的 block 数据
 * @param blockId 
 * @returns 
 */
export async function getBlockById(blockId: string) {
  // 查询 blocks 表，通过 blockId 获取具体的 block 数据
  const { data, error } = await supabase
    .from('blocks')  // 查询 blocks 表
    .select('*')
    .eq('id', blockId)  // 通过 id 字段进行精确匹配
    .single();  // 只返回一个匹配项

  if (error) {
    console.error('Error querying block by ID:', error.message);
    return null;
  }

  // 如果没有找到对应的 block，返回 null
  if (!data) return null;

  return data;
}

/**
 * 通过 blockId 查询 blocks 表，获取具体的 block 数据
 * @param blockId 
 * @returns 
 */
export async function getAiBlockById(blockId: string) {
  // 查询 blocks 表，通过 blockId 获取具体的 block 数据
  const { data, error } = await supabase
    .from('ai_blocks')  // 查询 blocks 表
    .select('*')
    .eq('id', blockId)  // 通过 id 字段进行精确匹配
    .single();  // 只返回一个匹配项

  if (error) {
    console.error('Error querying block by ID:', error.message);
    return null;
  }

  // 如果没有找到对应的 block，返回 null
  if (!data) return null;

  return data;
}


export async function insertBlock(block: any) {
  if (!block || !block.id || !block.name || !block.code) return;

  // 对 block 数据做适当转换
  const blockName = block.name;
  const blockType = blockName.split('_')[0];

  // 首先检查是否存在相同 name 的数据
  const { data: existingBlocks, error: fetchError } = await supabase
    .from('blocks')  // 替换为你的表名
    .select('id')
    .eq('name', blockName);  // 根据 name 来查询是否已经存在数据

  if (fetchError) {
    console.error('Error fetching existing blocks:', fetchError);
    return;
  }

  // 如果已有相同 name 的数据，则跳过插入
  if (existingBlocks && existingBlocks.length > 0) {
    console.log('Block with the same name already exists, skipping insertion.');
    return;
  }

  // 使用 Supabase 插入数据
  const { data, error } = await supabase
    .from('blocks')  // 替换为你的表名
    .upsert({
      id: block.id,
      name: blockName,
      code: block.code,
      type: blockType,
      props: typeof block.props === 'string' ? block.props : JSON.stringify(block.props || {}),
    }, { onConflict: 'id' })  // 使用 upsert 方法插入或更新数据
    .eq('id', block.id);  // 根据 ID 确保更新现有数据

  if (error) {
    console.error('Error inserting block:', error);
  } else {
    console.log('Block saved:', data);
  }
}

export async function insertAiBlock(block: any) {
  if (!block || !block.id || !block.name || !block.code) return;

  // 对 block 数据做适当转换
  const blockName = block.name;
  const blockType = blockName.split('_')[0];


  // 使用 Supabase 插入数据
  const { data, error } = await supabase
    .from('ai_blocks')  // 替换为你的表名
    .upsert({
      id: nanoid(),
      source_id: block.id,
      name: blockName,
      code: block.code,
      type: blockType,
      props: typeof block.props === 'string' ? block.props : JSON.stringify(block.props || {}),
    }, { onConflict: 'id' })  // 使用 upsert 方法插入或更新数据

  if (error) {
    console.error('Error inserting block:', error);
  } else {
    console.log('Block saved:', data);
  }
}