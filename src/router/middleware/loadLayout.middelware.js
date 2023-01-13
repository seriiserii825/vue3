import {AppLayoutsEnum, AppLayoutToFileMap } from '@/layouts/types.js';

export async function loadLayoutMiddleware(route) {
	const { layout } = route.meta;
	const normalizedLayoutName = layout || AppLayoutsEnum.default;
	const fileName = AppLayoutToFileMap[normalizedLayoutName];
	const fileNameWithoutExtension = fileName.split('.vue')[0];

	const component = await import(
		`../../layouts/${fileNameWithoutExtension}.vue`
	);
	route.meta.layoutComponent = component.default;
}
