//Importar Playwright
const playwright = require("playwright");

const url = "http://localhost:3002/ghost/";

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ["chromium"]) {
    //, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType + "-------------------------------------------");

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise((r) => setTimeout(r, 7000));
    console.log("Project loaded");

    //Interactuar con la aplicación web
    await page.goto("http://localhost:3002/ghost/");

    await page.type('input[id="blog-title"]', "Blog Diego");

    await page.screenshot({ path: "./prueba1.0.2.png" });

    await new Promise((r) => setTimeout(r, 3000));

    await page.type('input[id="blog-title"]', "Blog Diego");

    await new Promise((r) => setTimeout(r, 1000));

    await page.screenshot({ path: "./prueba1.1.2.png" });

    await page.type('input[id="name"]', "Diego Eslava");

    await new Promise((r) => setTimeout(r, 1000));

    await page.screenshot({ path: "./prueba1.2.2.png" });

    await page.type('input[id="email"]', "diegof.eslava@gmail.com");

    await new Promise((r) => setTimeout(r, 1000));

    await page.screenshot({ path: "./prueba1.3.2.png" });

    await page.type('input[id="password"]', "MISO420899494949494");

    await new Promise((r) => setTimeout(r, 1000));

    await page.screenshot({ path: "./prueba1.4.2.png" });

    await page.click(
      'button[class="gh-btn gh-btn-black gh-btn-signup gh-btn-block gh-btn-icon ember-view"]'
    );

    await new Promise((r) => setTimeout(r, 3000));

    await page.screenshot({ path: "./prueba1.5.2.png" });

    await page.click('a[href="#/dashboard/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.screenshot({ path: "./prueba1.6.2.png" });

    await page.click('a[href="#/tags/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.screenshot({ path: "./prueba1.7.2.png" });

    await page.click('a[href="#/tags/new/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.screenshot({ path: "./prueba1.8.2.png" });

    await page.type('input[id="tag-name"]', "Prueba");

    await page.screenshot({ path: "./prueba1.9.2.png" });

    await page.click(
      'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
    );

    await page.click('a[href="#/tags/"]');

    await new Promise((r) => setTimeout(r, 3000));

    await page.screenshot({ path: "./prueba1.10.2.png" });

    //...

    //Finalizar la prueba
    await browser.close();
  }
  return;
})(); //Llamado propio de la función
