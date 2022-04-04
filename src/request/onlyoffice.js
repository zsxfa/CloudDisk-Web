// onlyoffice 相关接口
import { post } from './http'

// 创建文档
export const createOfficeFile = (p) =>
	post('/api/core/office/createofficefile', p)
// 编辑文档
export const editOfficeFile = (p) => post('/api/core/office/editofficefile', p)
// 查看文档
export const previewOfficeFile = (p) =>
	post('/api/core/office/previewofficefile', p)
