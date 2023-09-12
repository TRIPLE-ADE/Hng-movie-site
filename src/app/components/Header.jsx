import Link from 'next/link';
import styles from '../style';

const Header = () => {
  return (
    <header className={`bg-[#032541] ${styles.padding} ${styles.boxWidth}`}>
      <nav className={`${styles.headerFlex}`}>
        <Link href="/" className="text-xl font-bold text-white">
          Movie Database
        </Link>
        <ul className="flex space-x-4">
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
