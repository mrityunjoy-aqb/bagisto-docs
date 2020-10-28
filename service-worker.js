/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.x/advanced/create_payment_method.html",
    "revision": "1b660b3490dacbbc7b724acd546a912a"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "b7477e2afb61adaf5f55017f06d5b374"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "3381f2098493ba944f58555516097759"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "c69ed6e66a51b309a2896d9894c783a6"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "82f3be86b9be9b11292019a3cefdab7b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "b736e0c0d45288dcdd0e837185679c43"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "c772e12fc6fbe5ddffa33a86eb85d9c0"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "54026ef362b9cbc6f3d7668148736e8a"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "50e63cc66f4d94cc8c9a2fba5fb148fb"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "e6645404ee01cc43ee354960c18dfaf6"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "3265d90339c6b28fe82ae129d24bcc0e"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "2d625ddd7af9b826192b88b938cdc32a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "9269987e555a8d5febc8eb28930ecd4b"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "14bc3b405d1e6cbae2a61d9fc004b4b0"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "e224f1618786e1f9176c17c36f85246f"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "f0e182c8c125bbd566bd22ff79d06cdc"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "7034a2229b3e863d0324d27946bf2160"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "01c467ff1a3b86fde79970c88dbbe02a"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "37d4af329d213f1afa00df808db9ec8d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "bfad142eafbe1797c6fb6a9bad5aabed"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "893b04eb03f6386fbe940de03d2383e5"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "89ac87856c9243a114493ea0008405ad"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "859bb53541d1bdba12748f87f4e06d27"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b7e78db9711989db7c235f4e4c8078c1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c7aaa9c7200df817355bcc1e2701b254"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "55ec76363cba88e1a92dee864d00a4dc"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "52bda816ac974028336d28cbacb1a9fd"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "abd53586fe3677bc861eccf22c89cdf5"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "e6a575137e8810bf8345facffa096c51"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "fde58e4b7a0f38e9bdd090eb7904f4e6"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "2af77d2980dcac82d6a79f26a3adb9d3"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "6b340fef5a0e01ee3095de83da71e800"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "f1fea48ef05de6a2ea3c54e475e19169"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "73e351b3afc5007618b8a96cff2aa73c"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "d8c67c73def2e1e86d809976d2703c27"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "5f6c5764db30e658b38ed8900954a059"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "ac30114914147eaa4afc468ee2aeb7e4"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "c79fd4bd041d24e1e88faaa2e4f84ab9"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "be4b2115096cf44e1b39e65a0e49f9f9"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "2e4004de3f34cecd786f4ef623f870b1"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "bf582f7f6c7fa03ef4f0d6d659029ee8"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "7f260d92b4faedbcb2d41c9a83754d2e"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "2c33951e2cce9ade7d433cb39cda0a67"
  },
  {
    "url": "404.html",
    "revision": "2abae57037f5cdabfdb63e0a1ee266d3"
  },
  {
    "url": "assets/css/0.styles.72d8348a.css",
    "revision": "13dc433800dd5688bb361c3c6554dd9d"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/demo_products.86acc2d1.jpg",
    "revision": "86acc2d17a24f156e867f75404f9e121"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.25de8282.js",
    "revision": "847a31f42227af9feed03f43223665c6"
  },
  {
    "url": "assets/js/11.44b11467.js",
    "revision": "200fb7e0019b0f74d6d11cd8bc457854"
  },
  {
    "url": "assets/js/12.d11970e9.js",
    "revision": "2999d73a04ade29eedf93a4d55642f19"
  },
  {
    "url": "assets/js/13.59f01e5a.js",
    "revision": "d6a1d56ec9b0dbce918a321d0c2a4e20"
  },
  {
    "url": "assets/js/14.c2daa463.js",
    "revision": "eeb9a323a4fc0c178bc112c28765c4ea"
  },
  {
    "url": "assets/js/15.8988fa3a.js",
    "revision": "e75e0587fb4e80c53584f58748b3b821"
  },
  {
    "url": "assets/js/16.ec80d196.js",
    "revision": "de2702277be468762922a43d1e510ef0"
  },
  {
    "url": "assets/js/17.5995d3bc.js",
    "revision": "fb1dcc232307d99508f44755434e8f36"
  },
  {
    "url": "assets/js/18.dcbb3b2d.js",
    "revision": "c6a64ed02318700c7d866d96d0b711ef"
  },
  {
    "url": "assets/js/19.4d08c427.js",
    "revision": "e23f191441c3e27bbbba5663066d9b4b"
  },
  {
    "url": "assets/js/2.d9a1c2f5.js",
    "revision": "db65abcb717716d7c9335acac8bf0bf7"
  },
  {
    "url": "assets/js/20.5045d6ed.js",
    "revision": "c5b72466441a3004a3dfaf7a474b1e63"
  },
  {
    "url": "assets/js/21.1c1258f3.js",
    "revision": "f87baa6f1b81e25eeb485d0d6810152d"
  },
  {
    "url": "assets/js/22.66c084f3.js",
    "revision": "6cad3dd8397c043e993273dd3ca11487"
  },
  {
    "url": "assets/js/23.af9c13f2.js",
    "revision": "19df2e974e6b7212b123c74615af342c"
  },
  {
    "url": "assets/js/24.3681dcfb.js",
    "revision": "0706ee9c1382fa773a6cd6d2419de769"
  },
  {
    "url": "assets/js/25.58287245.js",
    "revision": "2b359295a11d6d4a09bfeddc98f84abe"
  },
  {
    "url": "assets/js/26.3e9a134c.js",
    "revision": "b955abad3032e6780d4c80ee0a22138a"
  },
  {
    "url": "assets/js/27.4acf53d6.js",
    "revision": "4ca330aacd8030285608377e4a9b7691"
  },
  {
    "url": "assets/js/28.3770c150.js",
    "revision": "be4382a8ec4f772fa5a24cbdce2b6739"
  },
  {
    "url": "assets/js/29.7cab9d42.js",
    "revision": "893767540a759e15f1df15c4329eeeb5"
  },
  {
    "url": "assets/js/3.62d57d47.js",
    "revision": "6b340bbcd7734b711b5aae7330569329"
  },
  {
    "url": "assets/js/30.f461d78c.js",
    "revision": "c8069cbe8ce8c6be957621e82e86f929"
  },
  {
    "url": "assets/js/31.d8002514.js",
    "revision": "22453be7d3123166775e4fae3c672166"
  },
  {
    "url": "assets/js/32.a5f4d34c.js",
    "revision": "997e9a450141468377e5e9422621cc03"
  },
  {
    "url": "assets/js/33.cc5be820.js",
    "revision": "d1e305132c72e7b37d77725f67896243"
  },
  {
    "url": "assets/js/34.9f422283.js",
    "revision": "aff88d95c13b2244220917eef3aa260f"
  },
  {
    "url": "assets/js/35.eb477a72.js",
    "revision": "49fa3378d0795eae3c483dda1935e88e"
  },
  {
    "url": "assets/js/36.70365bec.js",
    "revision": "41e383f01632d6bdc37d7550f079a1d7"
  },
  {
    "url": "assets/js/37.d6f8f90c.js",
    "revision": "b09f61e70493c189658e69ce62dfbb7e"
  },
  {
    "url": "assets/js/38.5f2ef31b.js",
    "revision": "94a2f8efd750b33ac2a3ebdc53018a51"
  },
  {
    "url": "assets/js/39.a34c5b26.js",
    "revision": "fd7004bd3312028169d6a9fca789e4c7"
  },
  {
    "url": "assets/js/4.da862b1a.js",
    "revision": "3f1edfd611053ef842535cb2fdf767d1"
  },
  {
    "url": "assets/js/40.d575f913.js",
    "revision": "2071bcd3902b4c56290cad7d44a64e06"
  },
  {
    "url": "assets/js/41.3efd2801.js",
    "revision": "bd3645b0564c95bbc70dc33f92f2c244"
  },
  {
    "url": "assets/js/42.d1985cce.js",
    "revision": "f1fe9a23d1f1a2e641197269bf105ad3"
  },
  {
    "url": "assets/js/43.73edaf55.js",
    "revision": "105d563b511737ee53013f834d05db38"
  },
  {
    "url": "assets/js/44.98f5da69.js",
    "revision": "23fd462c04e52447168059997af44f8c"
  },
  {
    "url": "assets/js/45.16ca39a2.js",
    "revision": "a0757fc6ccb4a544c427be3f517ab7fc"
  },
  {
    "url": "assets/js/46.f1a4629d.js",
    "revision": "b96ed94df99bb50f2cab811321d65c5f"
  },
  {
    "url": "assets/js/47.5ccca0fc.js",
    "revision": "142282bfa8900e58312c50985c03b124"
  },
  {
    "url": "assets/js/48.0fe0a840.js",
    "revision": "e2df4b9f4ed932a770dc52e2605fbc4e"
  },
  {
    "url": "assets/js/49.c81dda6d.js",
    "revision": "43baa2438a6b846940fbe8dde5835faf"
  },
  {
    "url": "assets/js/5.e48802be.js",
    "revision": "bd1001170f7084189b4a85476732b969"
  },
  {
    "url": "assets/js/6.9ab9dee5.js",
    "revision": "7584ea785d8c08a93a5253ccb57378c9"
  },
  {
    "url": "assets/js/7.e3c56e52.js",
    "revision": "b59252bbbecbac509788066ab5c96a11"
  },
  {
    "url": "assets/js/8.6f493d2d.js",
    "revision": "60a2b832e3cf830fadd14d1845ceff40"
  },
  {
    "url": "assets/js/9.9d519010.js",
    "revision": "b19a4088e6cbedfbd6966a3b5753c3fa"
  },
  {
    "url": "assets/js/app.bb422bee.js",
    "revision": "13fee2566cfe57c8ea0d081b59314369"
  },
  {
    "url": "index.html",
    "revision": "53329db4ccffd48bd78a7c4eab8be004"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
