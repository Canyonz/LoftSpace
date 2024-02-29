import { contactsInfo, requisites } from "@/shared/const/db";
import { ApplicationForm } from "@/features/applicationForm/index";
import { AppImage } from "@/shared/ui/appImage/AppImage";
import { Maps } from "@/shared/ui/map/Maps";
import styles from "./ContactsPage.module.sass";

export const ContactsPage = () => {
	return (
		<main className={styles.contactPage}>
			<section className={styles.section1}>
				<h2 className={styles.sectionTitle}>Контактная информация</h2>
				{contactsInfo.map((contact) => (
					<div key={contact.id} className={styles.contact}>
						<div className={styles.details}>
							<div className={styles.textWrapper}>
								<h3 className={styles.contactTitle}>{contact.title}</h3>
								<span className={styles.text}>{contact.text}</span>
							</div>
							<span>{contact.tel}</span>
							<span>{contact.date}</span>
							<span>{contact.url}</span>
						</div>
					</div>
				))}
			</section>

			<section className={styles.section2}>
				<h2 className={styles.sectionTitle}>Реквизиты</h2>
				{requisites.map((requisite) => (
					<div key={requisite.id} className={styles.requisite}>
						<span>Организационно-правовая форма: {requisite.form}</span>
						<span>Название организации: {requisite.name}</span>
						<span>ИНН/КПП: {requisite.inn}</span>
						<span>ОГРН: {requisite.ogrn}</span>
					</div>
				))}
			</section>

			<section className={styles.section3}>
				<h2 className={styles.sectionTitle}>Как нас найти</h2>
				<Maps />
			</section>

			<section className={styles.section4}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Заказать обратный звонок</h2>
					<span>При возникновении вопросов, оставьте заявку и мы свяжемся с вами.</span>
					<div className={styles.form}>
						<ApplicationForm />
						<AppImage src="/contacts/psychologist.jpg" maxHeight />
					</div>
				</div>
			</section>
		</main>
	);
};
