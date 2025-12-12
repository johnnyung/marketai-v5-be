import { sp500Universe } from "./modules/universe/sp500Universe.js";
import { fmpFundamentalsModule } from "./modules/fundamentals/fmpFundamentals.js";
import { polygonDailyPricesModule } from "./modules/prices/polygonPrices.js";
import { fmpMacroModule } from "./modules/macro/fmpMacro.js";
import { fmpInsiderModule } from "./modules/insider/fmpInsider.js";
import { fmpNewsModule } from "./modules/news/fmpNews.js";
import { polygonCryptoModule } from "./modules/crypto/polygonCrypto.js";
export const ALL_MODULES = [
    sp500Universe, fmpFundamentalsModule, polygonDailyPricesModule,
    fmpMacroModule, fmpInsiderModule, fmpNewsModule, polygonCryptoModule
];
