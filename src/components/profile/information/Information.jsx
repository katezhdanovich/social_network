import s from './Information.module.css';

const Information = () => {
    return(
        <div className={s.info}>
            <div>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
            </div>
            <div className={s.text}>
                <div className={s.item}>Имя:</div>
                <div className={s.item}>Email:</div>
                <div className={s.item}>Номер телефона:</div>
            </div>
        </div>
    )
}

export default Information;