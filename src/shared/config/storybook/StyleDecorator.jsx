import "@/app/styles/index.sass";

export const StyleDecorator = (Story) => {
	return (
		<div className="app_light_theme">
			<Story />
		</div>
	);
};
