import { AppImage } from "@/shared/ui/appImage/AppImage";
import { AppIcon } from "@/shared/ui/appIcon/AppIcon";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import MapmarkerSVG from "@/shared/assets/icon/map-marker.svg";
import styles from "./MainPage.module.sass";
import LeafSVG from "@/shared/assets/icon/leaf.svg";
import ShippingSVG from "@/shared/assets/icon/shipping.svg";
import HandsheakeSVG from "@/shared/assets/icon/handshake.svg";
import { ApplicationForm } from "@/features/applicationForm/index";
import { Slider } from "@/shared/ui/slider/Slider";
import { slider1Items, slider2Items } from "@/shared/const/db";

export const MainPage = () => {
	return (
		<main className={styles.mainPage}>
			<article className={styles.article1}>
				<AppImage src="/main/header.jpg" className={styles.img} />

				<div className={styles.contentWrapper}>
					<div className={styles.contentSize}>
						<div className={styles.content}>
							<div className={styles.city}>
								<AppIcon Svg={MapmarkerSVG} />
								<span>г. Воронеж</span>
							</div>
							<h1 className={styles.title}>Минимализм с Loft Space</h1>
							<span>
								Философия минимализма заключается в тишине, свободе гармоничного помещения. Когда в пространстве нет ничего
								лишнего, отдыхает не только тело, но и душа.
							</span>
							<span>Наши коллекции в стиле минимализм - беспроигрышное дизайнерское решение.</span>
							<AppLink size="m" variant="filled">
								Коллекции
							</AppLink>
						</div>
					</div>
				</div>
			</article>

			<article className={styles.article2}>
				<div className={styles.contentWrapper}>
					<div className={styles.content}>
						<span className={styles.text}>
							Компания Loft Space следит за качеством и делает акцент на уникальности, при этом сохраняя традиции. Основной уклон
							в работе — минимализм и умные решения с целью экономии пространства.
						</span>
						<AppLink variant="filled" href="/about" color="neutral" size="s">
							О нас
						</AppLink>
					</div>
				</div>
			</article>

			<article className={styles.article3}>
				<div className={styles.sectionsWrapper}>
					<section className={styles.section}>
						<AppIcon Svg={LeafSVG} color="primary" size="44" className={styles.icon} />
						<h3 className={styles.title}>Экологичная мебель</h3>
						<span className={styles.text}>Наша продукция безопасна, благодаря натуральным материалам.</span>
					</section>
					<section className={styles.section}>
						<AppIcon Svg={ShippingSVG} color="primary" size="44" className={styles.icon} />
						<h3 className={styles.title}>Доставка и сборка</h3>
						<span className={styles.text}>Работа с опытными и аккуратными сборщиками.</span>
					</section>
					<section className={styles.section}>
						<AppIcon Svg={HandsheakeSVG} color="primary" size="44" className={styles.icon} />
						<h3 className={styles.title}>Консультация по дизайну </h3>
						<span className={styles.text}>Помощь дизайнера в создании, нужного вам, интерьера.</span>
					</section>
				</div>
			</article>

			<article className={styles.article4}>
				<div className={styles.contentWrapper}>
					<div className={styles.header}>
						<h2>Наши коллекции</h2>
						<AppLink isArrow>Коллекции</AppLink>
					</div>
					<div className={styles.sectionsWrapper}>
						<AppImage src="/main/collection.jpg" signature="Loft Minimal" />
						<AppImage src="/main/collection1.jpg" signature="Loft Grace" />
						<AppImage src="/main/collection2.jpg" signature="Loft Elite" />
					</div>
				</div>
			</article>

			<article className={styles.article5}>
				<div className={styles.contentWrapper}>
					<div className={styles.header}>
						<h2 className={styles.headerText}>Популярные товары</h2>
						<AppLink color="primary" isArrow>
							Каталог
						</AppLink>
					</div>
					<div className={styles.productsWrapper}>
						<section className={styles.product}>
							<AppImage src="/main/product.jpg" />
							<div className={styles.text}>
								<span className={styles.title}>Диван Loft</span>
								<span className={styles.price}>50 000 руб</span>
							</div>
						</section>
						<section className={styles.product}>
							<AppImage src="/main/product1.jpg" />
							<div className={styles.text}>
								<span className={styles.title}>Кресло Loft</span>
								<span className={styles.price}>20 000 руб</span>
							</div>
						</section>
						<section className={styles.product}>
							<AppImage src="/main/product2.jpg" />
							<div className={styles.text}>
								<span className={styles.title}>Журнальный стол Loft</span>
								<span className={styles.price}>40 000 руб</span>
							</div>
						</section>
						<section className={styles.product}>
							<AppImage src="/main/product3.jpg" />
							<div className={styles.text}>
								<span className={styles.title}>Стул Loft</span>
								<span className={styles.price}>10 000 руб</span>
							</div>
						</section>
					</div>
				</div>
			</article>

			<article className={styles.article6}>
				<AppImage src="/main/anatomy.png" maxHeight />
				<div className={styles.contentWrapper}>
					<div className={styles.content}>
						<h2 className={styles.title}>Анатомический наполнитель из экологичных материалов</h2>
						<ul className={styles.list}>
							<li className={styles.item}>
								Наша мебель является безопасной для здоровья, блягодяря использованию гипоаллергенных и гигиеничных материалов.
							</li>
							<li className={styles.item}>
								Обладает высокой эластичностью и средним, наиболее комфортным, показателем мягкости.
							</li>
						</ul>
					</div>
				</div>
			</article>

			<article className={styles.article7}>
				<div className={styles.contentWrapper}>
					<div className={styles.content}>
						<h2 className={styles.title}>Создайте свой интерьер с Loft Space</h2>
						<span className={styles.text}>
							Мы помогаем нашим покупателям в выборе стильной и современной мебели, которая подчеркивает интерьер квартиры/дома, а
							не оттеняет его. Наши специалисты предложат подходящее и грамотное дизайнерское решение вашего пространства.
						</span>
						<ul className={styles.list}>
							<li className={styles.item}>Заполните форму и наш дизайнер с вами свяжется</li>
							<li className={styles.item}>
								Обсудите детали по телефону или пригласите специалиста на дом, для более удобной планировки интерьера и замеров
							</li>
							<li className={styles.item}>Получите профессиональную консультацию и дизайн-проект для вашего пространства</li>
						</ul>
					</div>
					<ApplicationForm />
				</div>
			</article>

			<article className={styles.article8}>
				<Slider items={slider1Items} />
				<Slider items={slider2Items} reverse />
			</article>
		</main>
	);
};
