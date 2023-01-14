import { Content } from '@prismicio/client';
export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
	return value !== null && value !== undefined;
}

export const isLayoutData = (data: any): data is Content.LayoutsDocument['data'] =>
	data.slices !== undefined && Array.isArray(data.slices);
