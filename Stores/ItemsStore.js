import {Item} from "../Items/Items.js";
import {NAMES} from "./NamesStore.js";

export const ITEMS = [
    //videoigrNet
    Item.videoigrNet(NAMES.get('ps5'), 'https://videoigr.net/product_info/komplekt-sony-playstation-5-ps5/22932/'),
    Item.videoigrNet(NAMES.get('ps5'), 'https://videoigr.net/product_info/igrovaya-pristavka-playstation-5-pult-du-media-remote-ps5-kamera-sony-playstation-camera/22464/'),
    Item.videoigrNet(NAMES.get('ps5'), 'https://videoigr.net/product_info/igrovaya-pristavka-playstation-5/21201/'),
    Item.videoigrNet(NAMES.get('ps5'), 'https://videoigr.net/product_info/igrovaya-pristavka-playstation-5-2oy-dgoystik-dualsense-ps5/21515/'),
    Item.videoigrNet(NAMES.get('ps5_de'), 'https://videoigr.net/product_info/igrovaya-pristavka-playstation-5-digital-edition/21202/'),
    Item.videoigrNet(NAMES.get('ps5_de'), 'https://videoigr.net/product_info/igrovaya-pristavka-playstation-5-de-2oy-dualsense-pult-du-media-remote-ps5-kamera/22508/'),
    //1cInteres
    Item.cInteres(NAMES.get('ps5_de'), 'https://www.1c-interes.ru/admin/catalog/konsoli/komplekt_sony_playstation_5_igra_demon_s_souls_igra_chelovek_pauk_maylz_morales/'),
    Item.cInteres(NAMES.get('ps5_de'), 'https://www.1c-interes.ru/catalog/konsoli/komplekt_sony_playstation_5_digital_edition_hd_kamera_pult_media_remote/'),
    Item.cInteres(NAMES.get('ps5_de'), 'https://www.1c-interes.ru/catalog/konsoli/komplekt_sony_playstation_5_igra_ratchet_clank_skvoz_miry_igra_sekboy_bolshoe_priklyuchenie/'),
    Item.cInteres(NAMES.get('ps5_de'), 'https://www.1c-interes.ru/catalog/konsoli/komplekt_sony_playstation_5_igra_prizrak_tsusimy_igra_returnal/'),
    Item.cInteres(NAMES.get('ps5_de'), 'https://www.1c-interes.ru/catalog/konsoli/komplekt_sony_playstation_5_kontroller_dualsense_igra_fifa_22/'),
    //cdekShopping
    Item.cdekShopping(NAMES.get('ps5'), 'https://cdek.shopping/products/playstation-5-console'),
    Item.cdekShopping(NAMES.get('DS_black'), 'https://cdek.shopping/products/geimpad-playstation-dualsense-black-cernyi'),
]