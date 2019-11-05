import React from 'react';
import s from './LinkSocial.module.css';

const LinkSocial = (props) => {
    return (
        <div>
            {
                Object.entries(props.personInfo.contacts).map(([key, value], index) => {
                    return value ? <a   href={value.startsWith("http://") || value.startsWith("https://") ? value : `http://${value}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={s.linkIcon} 
                                        key={index}>
                        <img src={require(`./../../../assets/iconSet/icon-${key}.png`)} className={s.imageIcon} alt="" />
                    </a> : '';
                })
            }
        </div>
    );
}

export default LinkSocial;
