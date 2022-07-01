import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = {
  header: "bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]",
  headerWrapper: "flex justify-center h-full max-w-screen-xl mx-auto px-4",
  nav: "flex justify-center item-center gap-[20px]",
  navItem: "relative mr-1 cursor-pointer hover:opacity-60 ",
  badge:
    "rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4",
  inputContainer: "flex item-center justify-center pl-3 rounded bg-[#171924] ",
  input:
    "bg-transparent outline-none text-white p-3 w-70 ml-3 border-b-2 border-b-rose-600",
};
const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={200}
        height={200}
      />
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLinks}>Cryptocurrencies</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLinks}>Exchanges</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLinks}>NFT</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLinks}>Cryptown</div>
            <div className={styles.badge}></div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLinks}>Portfolio</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLinks}>Watchlist</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLinks}>Products</div>
            <div className={styles.badge}></div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLinks}>Learn</div>
          </div>
        </nav>
        <div className='flex item-center'>
          {/* connect Button */}
          <div className={styles.inputContainer}>
            <Search/>
            <input className={styles.input} placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header