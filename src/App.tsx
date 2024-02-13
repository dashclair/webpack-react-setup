import { FunctionComponent, PropsWithChildren } from 'react';
import './main.css';


export const App: FunctionComponent<PropsWithChildren>= ({children}) => {
    return (
        <div className = 'main'>
           {children}
        </div>
    )
}