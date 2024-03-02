import { slider1Items, slider2Items } from "@/shared/const/db";
import { Slider } from "@/shared/ui/slider/Slider";

export const ArticleSliders = () => {
	return (
		<article>
			<Slider items={slider1Items} />
			<Slider items={slider2Items} reverse />
		</article>
	);
};
