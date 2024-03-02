import { useCallback, useState } from "react";
import { Button } from "@/shared/ui/button/Button";
import { CheckBox } from "@/shared/ui/checkbox/CheckBox";
import { Confirmation } from "@/entities/confirmation/Confirmation";
import styles from "./ApplicationForm.module.sass";
import { InputForm } from "@/shared/ui/inputForm/InputForm";

/**
 *
 * @param {{
 * 	secondary: boolean,
 * 	onSubmit: () => void
 * }} props
 *
 */

//Какой то костыль, подумать над реализацией
const Form = ({ secondary, onSubmit }) => {
	const [name, setName] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");
	const [checked, setChecked] = useState(false);

	const onChangeChecked = () => {
		setChecked((prev) => !prev);
	};

	const handleOnSubmit = (event) => {
		onSubmit(event, { name, tel, email });
		setName("");
		setTel("");
		setEmail("");
		setChecked(false);
	};

	if (secondary) {
		return (
			<form onSubmit={handleOnSubmit} className={styles.formSecondary}>
				<h3 className={styles.title}>Узнай самым первым о скидках, акциях и новых коллекция</h3>
				<div className={styles.inputs}>
					<InputForm type="text" placeholder="Введите имя" value={name} required setValue={setName} />
					<InputForm type="email" placeholder="Введите e-mail" value={email} required setValue={setEmail} />
					<Button type="submit" maxWidth size="m">
						Подписаться на рассылку
					</Button>
				</div>
			</form>
		);
	}

	return (
		<form onSubmit={handleOnSubmit} className={styles.form}>
			<h2 className={styles.title}>Оставьте заявку</h2>
			<div className={styles.inputs}>
				<InputForm type="text" placeholder="Введите имя" value={name} required setValue={setName} />
				<InputForm type="tel" placeholder="+7 (___)___-__-__" value={tel} required setValue={setTel} />
				<InputForm type="email" placeholder="Введите e-mail" value={email} required setValue={setEmail} />
			</div>
			<CheckBox
				checked={checked}
				label="Согласен с условиями использования моих пресональных данных"
				onChange={onChangeChecked}
				className={styles.checkbox}
			/>
			<Button type="submit" maxWidth isDisabled={!checked}>
				Отправить
			</Button>
		</form>
	);
};

/**
 *
 * @param {{
 * 	secondary: boolean,
 * }} props
 *
 */

export const ApplicationForm = ({ secondary }) => {
	const [formData, setFormData] = useState({ name: "", tel: "", email: "" });
	const [isSent, setIsSent] = useState(false);

	const onSubmit = (event, ...data) => {
		event.preventDefault();
		setFormData(...data);
		setIsSent(true);
	};

	const onClose = useCallback(() => {
		setIsSent(false);
	}, []);

	const title = secondary ? "вы подписались на рассылку!" : "ваша заявка отправлена!";

	return (
		<>
			<Form onSubmit={onSubmit} secondary={secondary} />
			{isSent && (
				<Confirmation title={`${formData.name}, ${title}`} tel={formData.tel} email={formData.email} onClose={onClose} />
			)}
		</>
	);
};
