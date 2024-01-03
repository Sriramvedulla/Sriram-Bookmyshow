import React from "react";
import "./Offer.css";
import { FaGooglePay } from "react-icons/fa6";
import { SlCreditCard, SlWallet, SlBadge } from "react-icons/sl";
import { SiBookmyshow } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";
import { BsCurrencyRupee } from "react-icons/bs";
import Offers1 from "./Offers1.js";
import Offers2 from "./Offers2.js";
import Offers3 from "./Offers3.js";
import Offers4 from "./Offers4.js";
import Offers5 from "./Offers5.js";
// offersList1===========================================
const OffersList1 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?21082023195825",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?21082023195825",
    para1: "SBI Signature/Elite credit card offer",
    para2: "31 mar 2026 23:59",
    category: "creditcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/kotak-bank-trevor-noah-off-the-record-tour-offer-ktktn0723.jpg?04082023115616",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/kotak-bank-backstreet-boys-dna-world-tour-offer-ktkbsb0323.jpg?04082023115616",
    para1: "Kotak Bank Trevor Noah: Off The Record Tour Offer",
    para2: "1 oct 2023 23:59",
    category: "creditcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rupay-sunburn-arena-credit-card-offer-rupaycc231.jpg?25082023171440",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/rupay-credit-card-offer-rpaycc1121.jpg?25082023171440",
    para1: "RuPay Sunburn Arena Credit Card Offer",
    para2: "1 oct 2023 23:59",
    category: "creditcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rupay-sunburn-credit-card-offer-rupay231.jpg?17072023214523",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/rupay-credit-card-offer-rpaycc1121.jpg?25082023171440",
    para1: "RuPay Sunburn Credit Card Offer",
    para2: "1 oct 2023 23:59",
    category: "creditcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/canara-bank-credit-card-offer-canara723.jpg?17072023135020",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/canara-bank-credit-card-offer-canara723.jpg?17072023135021",
    para1: "Canara Bank Credit Card Offer",
    para2: "8 oct 2023 23:59",
    category: "creditcard",
  },
];
// offersList2===========================================
const OffersList2 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?17042023075428",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/rblmon1216.jpg?17042023075428",
    para1:
      "RBL Bank Popcorn, Fun+,Movies & More and Blockbuster Card monthly offers",
    para2: "31 Oct 2024 23:59",
    category: "creditcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?17042023075428",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/rblmon1216.jpg?17042023075428",
    para1:
      "RBL Bank Popcorn, Fun+,Movies & More and Blockbuster Card monthly offers",
    para2: "10 Oct 2024 23:59",
    category: "creditcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?17042023075501",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/rblmon1216.jpg?17042023075428",
    para1: "RBL Bank YOUnique Credit Card Offer",
    para2: "20 oct 2024 23:59",
    category: "creditcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/yes-private-credit-card-offer-yespr0917.jpg?31072023132110",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/yes-private-credit-card-offer-yespr0917.jpg?31072023132110",
    para1: "Yes Private Credit Card Offer",
    para2: "29 dec 2023 23:59",
    category: "creditcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/aurum-credit-card-offer-sbispr0420.jpg?10072023171252",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/aurum-credit-card-offer-sbispr0420.jpg?10072023171252",
    para1: "AURUM Credit Card Offer",
    para2: "30 mar 2026 10:52",
    category: "creditcard",
  },
];
// offersList3===========================================
const OffersList3 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/discountcpns.jpg?08102022151416",
    para1: "Winpin :BookMyShow Discount Offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/discountcpns.jpg?08102022151416",
    para2: " As per the T&Cs",
    category: "bookmyshow",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/fukrey-3-movie-voucher-fukrey200.jpg?06092023172548",
    para1: "Fukrey 3 Movie Voucher",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/dream-girl-movie-voucher-dreamgirl.jpg?06092023172548",
    para2: "21 sep 2023 23:59",
    category: "bookmyshow",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/dbs0514.jpg?11082023155321",
    para1: "DBS Treasures Offers",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/dbs0514.jpg?11082023155322",
    para2: "10 Aug 2023 23:59",
    category: "debitcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/rupay-sbi-debit-card-offer-sbidc0823.jpg?01092023132212",
    para1: "RuPay SBI Debit Card Offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/rupay-credit-card-offer-rpaycc1121.jpg?01092023132212",
    para2: "29 sep 2023 23:59",
    category: "debitcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/jupiter-cashback-offer-jupiterupi0723.jpg?14072023125932",
    para1: "Jupiter CashBack Offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/jupiter-cashback-offer-juspay0722.jpg?14072023125932",
    para2: "14 sep 2023 23:59",
    category: "upi",
  },
];
// offersList4===========================================
const OffersList4 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/flat-inr-100--on-min-purchase-of-2-ticket-connplex100.jpg?14082023164327",
    para1: "Flat INR 100/- on min purchase of 2 ticket",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/buy-2-tickets-and-get-10percent-off-bms100.jpg?14082023164327",
    para2: "12 sep 2023 23:59",
    category: "bookmyshow",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/lazypay-cashback-offer-lazypay0623.jpg?31082023232516",
    para1: "LazyPay Cashback Offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/lazypay-movie-cashback-offer-lazypaymovie.jpg?31082023232516",
    para2: "30 sep 2023 23:59",
    category: "paylater",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/visa-infinite-program-vip0116.jpg?29082023105536",
    para1: "Visa Infinite Card Offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/vip0116.jpg?31082023151228",
    para2: "30 Feb 2023 23:59",
    category: "debitcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/payzapp-cashback-offer-payzapp0823.jpg?06092023014741",
    para1: "PayZapp CashBack offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/vip0116.jpg?31082023151228",
    para2: "30 sep 2023 23:59",
    category: "wallet",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/twid---pay-with-rewards-twidpay0923.jpg?05092023112247",
    para1: "Pay with Rewards",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/twid---pay-with-rewards-twidpay1022.jpg?05092023112247",
    para2: "30 sep 2023 23:59",
    category: "rewards",
  },
];
// offersList5===========================================
const OffersList5 = [
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/federal-bank-debit-card-offer-feddc0722.jpg?28062023160229",
    para1: "Federal Bank Debit Card Offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/federal-bank-offer---buy-1-ticket-get-1-ticket-free-feddc0722.jpg?28062023160230",
    para2: "30 sep 2023 23:59",
    category: "debitcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/flat-inr-50--on-min-purchase-of-2-ticket-jaipur50.jpg?12072023134448",
    para1: "Flat INR 50/- on min purchase of 2 ticket",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/buy-2-tickets-and-get-10percent-off-bms100.jpg?28062023151322",
    para2: "8 sep 2023 23:59",
    category: "cinema",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/flat-inr-50--on-min-purchase-of-2-ticket-movies50.jpg?28062023151322",
    para1: "Flat INR 50/- on min purchase of 2 ticket",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/buy-2-tickets-and-get-10percent-off-bms100.jpg?28062023151322",
    para2: "25 dec 2023 23:59",
    category: "cinema",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/visa-blockbuster-weekends-offer-vsbogo1111.jpg?07082023182343",
    para1: "VISA Blockbuster Weekends Offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/vsbogo1111.jpg?07082023182343",
    para2: "30 Nov 2023 23:59",
    category: "debitcard",
  },
  {
    imgLink:
      "https://in.bmscdn.com/offers/offerlisting/axis-bank-edebit-card-offer-axsvrdc420.jpg?17042023080934",
    para1: "Axis Bank E-Debit Card offer",
    thumbnail:
      "https://in.bmscdn.com/offers/tnclogo/axis-bank-value-and-delight-debit-card-offers-axis0619.jpg?17042023080934",
    para2: "31 mar 2024 23:59",
    category: "debitcard",
  },
];
function Offers() {
  return (
    <div>
      <div>
        <h2>fliter offers by</h2>
        <div className="offerfilter">
          <div className="payicons">
            <div className="filtericon">
              <SlCreditCard className="ricons"></SlCreditCard>
            </div>
            <p>Credit Card</p>
          </div>
          <div className="payicons">
            <div className="filtericon">
              <SlCreditCard className="ricons"></SlCreditCard>
            </div>
            <p>Debit Card</p>
          </div>
          <div className="payicons">
            <div className="filtericon">
              <SiBookmyshow className="ricons"></SiBookmyshow>
            </div>
            <p>BookMyShow</p>
          </div>
          <div className="payicons">
            <div className="filtericon">
              <BiMoviePlay className="ricons"></BiMoviePlay>
            </div>
            <p>Cinema</p>
          </div>
          <div className="payicons">
            <div className="filtericon">
              <SlWallet className="ricons"></SlWallet>
            </div>
            <p>Wallet</p>
          </div>
          <div className="payicons">
            <div className="filtericon">
              <SlBadge className="ricons"></SlBadge>
            </div>
            <p>Rewards</p>
          </div>
          <div className="payicons">
            <div className="filtericon">
              <FaGooglePay className="ricons"></FaGooglePay>
            </div>
            <p>UPI</p>
          </div>
          <div className="payicons">
            <div className="filtericon">
              <BsCurrencyRupee className="ricons"></BsCurrencyRupee>
            </div>
            <p>Pay Later</p>
          </div>
        </div>
      </div>
      <div className="maincards">
        {/*-------------------- Offers1---------- */}
        <div className="offers">
          <div className="offerlink">
            {OffersList1.map((item, o) => {
              return (
                <Offers1
                  key={o}
                  imgLink={item.imgLink}
                  thumbnail={item.thumbnail}
                  para1={item.para1}
                  para2={item.para2}
                ></Offers1>
              );
            })}
          </div>
        </div>
        {/*-------------------Offers2--------*/}
        <div className="offers">
          <div className="offerlink">
            {OffersList2.map((item, o) => {
              return (
                <Offers2
                  key={o}
                  imgLink={item.imgLink}
                  thumbnail={item.thumbnail}
                  para1={item.para1}
                  para2={item.para2}
                ></Offers2>
              );
            })}
          </div>
        </div>
        {/*-------------------Offers3--------*/}
        <div className="offers">
          <div className="offerlink">
            {OffersList3.map((item, o) => {
              return (
                <Offers3
                  key={o}
                  imgLink={item.imgLink}
                  thumbnail={item.thumbnail}
                  para1={item.para1}
                  para2={item.para2}
                ></Offers3>
              );
            })}
          </div>
        </div>
        {/*-------------------Offers4--------*/}
        <div className="offers">
          <div className="offerlink">
            {OffersList4.map((item, o) => {
              return (
                <Offers4
                  key={o}
                  thumbnail={item.thumbnail}
                  imgLink={item.imgLink}
                  para1={item.para1}
                  para2={item.para2}
                ></Offers4>
              );
            })}
          </div>
        </div>
        {/*-------------------Offers5--------*/}
        <div className="offers">
          <div className="offerlink">
            {OffersList5.map((item, o) => {
              return (
                <Offers5
                  key={o}
                  imgLink={item.imgLink}
                  thumbnail={item.thumbnail}
                  para1={item.para1}
                  para2={item.para2}
                ></Offers5>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
