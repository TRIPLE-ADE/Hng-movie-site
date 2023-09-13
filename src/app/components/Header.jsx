import Link from 'next/link';
import styles from '../style';
import Image from 'next/image';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <header className={`${styles.padding} ${styles.boxWidth}`}>
      <nav className={`${styles.headerFlex}`}>
        <Link href="/" className="text-xl font-bold text-white">
            <Image src="/Logo.svg" width={80} height={80} alt="logo"  style={{ width: 'auto', height: 'auto' }} priority={true}/>
        </Link>
        <SearchInput />
        <div className='flex items-center justify-center gap-3'>
            <p>Sign in</p>
            <button>
                <Image src="/Menu.svg" width={36} height={36} alt="Menu" />
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
