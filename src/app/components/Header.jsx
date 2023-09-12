import Link from 'next/link';
import styles from '../style';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={`bg-[#032541] ${styles.padding} ${styles.boxWidth}`}>
      <nav className={`${styles.headerFlex}`}>
        <Link href="/" className="text-xl font-bold text-white">
            <Image src="/Logo.svg" width={100} height={50} alt="logo" />
        </Link>
        <ul className="flex space-x-4">
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
