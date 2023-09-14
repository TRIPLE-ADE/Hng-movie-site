const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCol: "flex flex-col items-center justify-center",
    headerFlex: "flex flex-wrap justify-center gap-5 sm:justify-between items-center",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `grid grid-col-2 sm:grid-col-4 md:grid-col-5 ${styles.paddingY} ${styles.paddingX}`,
  }; 

  export const active = {
    activeCard: `bg-rose-100 before:content="" before:h-full before:bg-rose-600 before:w-1 before:absolute before:right-0 relative`,
  }
  
  export default styles;