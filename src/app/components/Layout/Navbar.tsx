import Image from "next/image";
import Link from "next/link";
import supportIcon from "../../../app/assets/support.svg";
import duaIcon from "../../../app/assets/dua.svg";
import homeIcon from "../../../app/assets/Home.svg";
import allDuasIcon from "../../../app/assets/allDua.svg";
import memoriseIcon from "../../../app/assets/Memorize.svg";
import bookmarkIcon from "../../../app/assets/Bookmark.svg";
import rukyahIcon from "../../../app/assets/Ruqyah.svg";
import duaQAIcon from "../../../app/assets/duaqa.svg";
import bookIcon from "../../../app/assets/Book.svg";

function Navbar(props: any) {
  return (
    <nav className="bg-white h-5/6 w-20 text-white p-4 fixed z-10 rounded-lg">
      <div className="container h-full mx-auto items-center justify-between flex flex-col content-between">
        <div>
          <Link href="/">
            <Image src={duaIcon} alt="Custom Icon" width={500} height={500} />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <Link href="/">
            <Image src={homeIcon} alt="Custom Icon" width={38} height={38} />
          </Link>
          <Link href="/">
            <Image src={allDuasIcon} alt="Custom Icon" width={38} height={38} />
          </Link>
          <Link href="/">
            <Image
              src={memoriseIcon}
              alt="Custom Icon"
              width={38}
              height={38}
            />
          </Link>
          <Link href="/">
            <Image
              src={bookmarkIcon}
              alt="Custom Icon"
              width={38}
              height={38}
            />
          </Link>
          <Link href="/">
            <Image src={rukyahIcon} alt="Custom Icon" width={38} height={38} />
          </Link>
          <Link href="/">
            <Image src={duaQAIcon} alt="Custom Icon" width={38} height={38} />
          </Link>
          <Link href="/">
            <Image src={bookIcon} alt="Custom Icon" width={38} height={38} />
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image
              src={supportIcon}
              alt="Custom Icon"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
