import { ReactNode } from 'react';
import styles from './Button.module.scss'

interface ButtonProps {
    onClick?: Function | null; 
    label: string;
    icon?: ReactNode;
}
export const FillButton:React.FC<ButtonProps> = ({onClick, label, icon}) => 
<button className={`inline-flex items-center ${styles.hoverFillBtn}`}>
    <div className={styles.label}>{label}</div>
    {icon && <div className={styles.icon}>{icon}</div>}
</button>