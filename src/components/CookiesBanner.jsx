import CookieConsent from 'react-cookie-consent';
import AccessibleLink from './Accessibility/AccessibleLink';

const CookiesBanner = () => {
  return (
    <>
      <CookieConsent
        location='bottom'
        buttonText='Aceptar'
        declineButtonText='Denegar'
        enableDeclineButton
        cookieName='analyticsConsentSLSLogistics'
        style={{ background: "#2B373B", color: "#ffffff" }}
        buttonStyle={{ backgroundColor: '#efc753', color: "#fff", fontSize: "16px", borderRadius: '4px 4px 4px 4px' }}
        declineButtonStyle={{borderRadius: '4px 4px 4px 4px'}}
        expires={150}
        //  onAccept={() => {
        //     window.gtag('consent', 'update', {
        //       analytics_storage: 'granted',
        //     });
        //   }}
        onAccept={() => console.log('Cookie aceptada')}
        onDecline={() => console.log('Cookie denegada')}
      >
        <p>
        Esta web utiliza cookies para fines de análisis.
        </p>
        <p>
        Si quiere consultar nuestra polítca de cookies puede hacerlo desde este{' '}
        <AccessibleLink to='/cookies' aria-label='Ir a política de cookies'>link</AccessibleLink>
        </p>
      </CookieConsent>
    </>
  );
};

export default CookiesBanner;
