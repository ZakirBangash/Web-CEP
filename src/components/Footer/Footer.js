import React from 'react'
import './Footer.css'

const Footer = () => {

    const dataPicker = () => {
        let date = new Date();
        return date.getFullYear();
    }

    return (
        <footer className="footer">
        <div className="footer__left">
          <h6>Developed by ZakirBangash</h6>
        </div>
        <div className="footer__right">
            <h6>Copyright © {dataPicker()} ZB</h6>
        </div>
    </footer>
    )
}

export default Footer
 