console.log("PWA is Running! .... 😀");

const ROOT_PATH = '/pwa-demo';

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        registerServiceWorker().catch(err => console.log("Error: ", err));
    }
  });

async function registerServiceWorker() {
    try {
        const reg = await navigator.serviceWorker.register(ROOT_PATH + "/sw.js");
        console.log('Registered! 😎 ', reg);
    } catch (err) {
        console.log('😭 Registration failed: ', err);
    }
}
