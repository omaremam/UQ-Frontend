import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
/**custom modules*/
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../redux/reducers/loader";
import { CATEGORIES } from "../../utils/helper/Enum";
import * as CUSTOM from "../../utils/helper/custom";
import {
  updateCategories,
  getAllCategories,
} from "../../redux/reducers/allCategories";

const NavMenu = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAllCatData = useSelector(getAllCategories);
  const [submenu, setSubmenu] = useState(null);
  const [subsubmenu, setSubsubmenu] = useState(null);
  const [submenuLineStyles, setsubmenuLineStyles] = useState(null);
  const handlesubmenuIn = (index) => {
    const submenu = document.querySelectorAll(`.submenu-${index}`);
    const submenuline = document.querySelectorAll(`.menu-line-${index}`);
    const item = document.querySelectorAll(`.item-${index}`);
    if (submenu.length > 0) {
      submenu.forEach((element) => {
        element.classList.remove("hidden");
        element.classList.add("flex");
      });
      setSubmenu(index);
    }
    if (submenuline.length > 0) {
      submenuline.forEach((element) => {
        element.classList.add("animation");
      });
      setSubmenu(index);
    }
    if (item.length > 0) {
      item.forEach((element) => {
        element.classList.remove("overflow-hidden");
      });
      setSubmenu(index);
    }
  };

  const handleMoreCategory = (id, type = "in") => {
    const submenus = document.querySelectorAll(`.more-hide-category`);
    submenus.forEach((element) => {
      element.classList.remove("flex");
      element.classList.add("hidden");
    });
    const submenu = document.querySelectorAll(`.more-main-sub-${id}`);
    submenu.forEach((element) => {
      if (type == "in") {
        element.classList.remove("hidden");
        element.classList.add("flex");
      } else {
        element.classList.remove("flex");
        element.classList.add("hidden");
      }
    });
  };

  const handleMoreSubCategory = (id, type = "in") => {
    const submenu = document.querySelectorAll(`.more-main-sub-sub-${id}`);
    submenu.forEach((element) => {
      if (type == "in") {
        element.classList.remove("hidden");
        element.classList.add("flex");
      } else {
        element.classList.remove("flex");
        element.classList.add("hidden");
      }
    });
  };

  const handlesubmenuOut = (index) => {
    const submenu = document.querySelectorAll(`.submenu-${index}`);
    const submenuline = document.querySelectorAll(`.menu-line-${index}`);
    const item = document.querySelectorAll(`.item-${index}`);
    if (submenu.length > 0) {
      submenu.forEach((element) => {
        element.classList.add("hidden");
        element.classList.remove("flex");
      });
      setSubmenu(null);
    }
    if (submenuline.length > 0) {
      submenuline.forEach((element) => {
        element.classList.remove("animation");
      });
      setSubmenu(index);
    }
    if (item.length > 0) {
      item.forEach((element) => {
        element.classList.add("overflow-hidden");
      });
      setSubmenu(index);
    }
  };
  const handlesubsubmenuIn = (index) => {
    const subsubmenu = document.querySelectorAll(`.subsubmenu-${index}`);
    if (subsubmenu.length > 0) {
      subsubmenu.forEach((element) => {
        element.classList.remove("hidden");
        element.classList.add("flex");
      });
      setSubsubmenu(index);
    }
  };
  const handlesubsubmenuOut = (index) => {
    const subsubmenu = document.querySelectorAll(`.subsubmenu-${index}`);
    if (subsubmenu.length > 0) {
      subsubmenu.forEach((element) => {
        element.classList.add("hidden");
        element.classList.remove("flex");
      });
      setSubsubmenu(null);
      setSubmenu(null); // Close the submenu as well
    }
  };
  const handlesubmenuClick = (index) => {
    const submenu = document.querySelectorAll(`.submenu-${index}`);
    if (submenu.length > 0) {
      submenu.forEach((element) => {
        element.classList.remove("hidden");
        element.classList.add("flex");
      });
      setSubsubmenu(null);
      setSubmenu(null);
    }
  };
  const handlesubsubmenuClick = (index) => {
    const subsubmenu = document.querySelectorAll(`.subsubmenu-${index}`);
    if (subsubmenu.length > 0) {
      subsubmenu.forEach((element) => {
        element.classList.add("flex");
        element.classList.remove("hidden");
      });
      setSubsubmenu(null);
      setSubmenu(null);
    }
  };
  const submenuStyles = "hidden";
  const subsubmenuStyles = "hidden";

  const getAllCategoriesList = async () => {
    try {
      //dispatch(changeLoader(true));
      let response = await globalRequest(
        CATEGORIES?.GET_ALL_CATEGORIES,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        dispatch(updateCategories(response?.data));
      }
    } catch (e) { }
    dispatch(changeLoader(false));
  };
  useEffect(() => {
    if (getAllCatData.length == 0) {
      getAllCategoriesList();
    }
  }, []);

  const closeMenutoggle = () => {
    setTimeout(() => {
      dispatch(changeLoader('removeBodyClass'));
      props.setHamburger(false);
    }, [500]);
  };

  return (
    <>
      <div className={`${props.navStyles} flex flex-row `}>
        <ul className="flex sm:flex-col flex-row gap-7 md:gap-4 justify-center w-auto sm:w-full common-row-list h-100">
          {getAllCatData?.map((catItem, catIndex) => {
            if (catIndex < 5) {
              return (
                <li
                  className="flex sm:flex-col relative item-1"
                  onMouseEnter={() => handlesubmenuIn(catItem?.id)}
                  onMouseLeave={() => handlesubmenuOut(catItem?.id)}
                  onClick={() => handlesubmenuClick(catItem?.id)}
                >
                  <Text
                    className="text-black-900 text-sm self-center sm:self-start"
                    size="txtMohrRoundedAltMedium14Black900"
                  >
                    {CUSTOM.getdataByLangKey(
                      catItem?.categoryLocales,
                      CUSTOM.getDefaultLanguage(),
                      "name"
                    )}
                  </Text>
                  <div
                    className={`bg-pink-800 h-1 w-full absolute bottom-0 ltr:left-0 rtl:right-0 z-50 sm:hidden menu-element left-animation menu-line-${catItem?.id} menu-line ${submenuLineStyles}`}
                  ></div>

                  {catItem?.subcategories?.length ? (
                    <div className={`${submenuStyles} submenu-${catItem?.id}`}>
                      <div className="w-auto min-w-[222px] flex flex-row bg-white-A700 shadow-md sm:shadow-none absolute sm:relative top-full sm:top-[unset] mx-auto -left-9 sm:left-[unset] right-auto z-50 sm:mx-0 sm:w-full z-[99]">
                        <div className="relative flex flex-col pt-2.5 pb-7 sm:pb-2.5 w-full">
                          <ul className="flex flex-col">
                            {catItem?.subcategories?.map(
                              (subItem, ItemIndex) => {
                                return (
                                  <li
                                    key={`sub-sub-sub${ItemIndex}`}
                                    className="flex items-center sm:flex-wrap px-6 sm:pr-0 py-2.5 justify-between gap-x-5 submenu_icon_hover"
                                    onMouseEnter={() =>
                                      handlesubsubmenuIn(subItem?.id)
                                    }
                                    onMouseLeave={() =>
                                      handlesubsubmenuOut(subItem?.id)
                                    }
                                    onClick={() =>
                                      handlesubsubmenuClick(subItem?.id)
                                    }
                                  >
                                    <Text
                                      onClick={(e) => {
                                        closeMenutoggle();
                                        navigate(
                                          `/productlist/${subItem?.slug}`
                                        );
                                      }}
                                      className="text-black-900 whitespace-nowrap font-mohrroundedaltregular hover:text-pink-800 font-normal hover:font-medium hover:font-mohrroundedaltmedium	text-base self-center rtl:text-right"
                                    >
                                      {CUSTOM.getdataByLangKey(
                                        subItem?.categoryLocales,
                                        CUSTOM.getDefaultLanguage(),
                                        "name"
                                      )}
                                    </Text>
                                    {subItem?.subsubcategories?.length > 0 ? (
                                      <Img
                                        className="h-6 object-contain w-6 min-w-[1.5rem] rtl:rotate-180"
                                        src="/images/arrow_forward.svg"
                                        alt="rabbitholelogo"
                                      />
                                    ) : (
                                      ""
                                    )}
                                    {subItem?.subsubcategories?.length > 0 ? (
                                      <div
                                        className={`${subsubmenuStyles} subsubmenu-${subItem?.id} sm:w-full flex flex-col pt-2.5 pb-7 sm:py-0 w-full border-l sm:border-none min-w-[230px] absolute sm:relative left-full rtl:left[unset] rtl:right-full sm:right-[unset] sm:left-[unset] top-0 sm:top-[unset] min-h-[258px] sm:min-h-[auto] shadow-md sm:shadow-none bg-white-A700`}
                                      >
                                        <ul className="flex flex-col">
                                          {subItem?.subsubcategories?.map(
                                            (subsubItem, subsubIndex) => {
                                              return (
                                                <li
                                                  className="px-6 py-2.5"
                                                  key={`testst${Math.random()}`}
                                                >
                                                  <Text
                                                    onClick={(e) => {
                                                      closeMenutoggle();
                                                      navigate(
                                                        `/productlist/${subsubItem?.slug}`
                                                      );
                                                    }}
                                                    className="text-black-900 whitespace-nowrap font-mohrroundedaltregular hover:text-pink-800 font-normal hover:font-medium hover:font-mohrroundedaltmedium	text-base self-center rtl:text-right"
                                                  >
                                                    {CUSTOM.getdataByLangKey(
                                                      subsubItem?.categoryLocales,
                                                      CUSTOM.getDefaultLanguage(),
                                                      "name"
                                                    )}
                                                  </Text>
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </div>
                                    ) : null}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            }
          })}
          {getAllCatData?.length > 5 ? (
            <>
              <li
                className="flex sm:flex-col item-4"
                onMouseEnter={(e) => {
                  handlesubmenuIn("moreold");

                  const submenus = document.querySelectorAll(`.hidesubsubmorecate`);
                  submenus.forEach((element) => {
                    element.classList.remove("flex");
                    element.classList.add("hidden");
                  });

                  handleMoreCategory(getAllCatData[5]?.id, "in");
                }}
                onMouseLeave={() => handlesubmenuOut("moreold")}
                onClick={() => handlesubmenuClick("moreold")}
              >
                <div className="w-full relative flex sm:flex-col">
                  <Text
                    className="text-black-900 text-sm self-center sm:self-start"
                    size="txtMohrRoundedAltMedium14Black900"
                  >
                    More
                  </Text>
                  <div
                    className={`bg-pink-800 h-1 w-full absolute bottom-0 ltr:left-0 rtl:right-0 z-50 sm:hidden menu-element left-animation menu-line-moreold menu-line ${submenuLineStyles}`}
                  ></div>
                </div>
                <div
                  className={`${submenuStyles} submenu-moreold bg-white-A700 shadow-md sm:shadow-none absolute sm:relative top-full sm:top-[unset] mx-auto left-0 rtl:left-[unset] rtl:right-0 rtl:md:left-[unset] sm:left-[unset] sm:mx-0 w-full rounded-b-lg z-[99]`}
                >
                  <div className="grid grid-cols-3 w-full">
                    <div className="flex flex-row h-full max-h-[445px] overflow-auto">
                      <div className="relative flex flex-col pt-2.5 pb-7 sm:pb-2.5 w-full h-full ">
                        <ul className="flex flex-col">
                          {getAllCatData.map((mainCatItem, mainCatInded) => {
                            if (mainCatInded > 4) {
                              return (
                                <li
                                  key={"more-sub" + mainCatInded}
                                  className="flex items-center sm:flex-wrap px-6 sm:pr-0 py-2.5 justify-between gap-x-5 submenu_icon_hover"
                                  onMouseEnter={() =>
                                    handleMoreCategory(mainCatItem?.id, "in")
                                  }
                                  onMouseLeave={() =>
                                    handleMoreCategory(mainCatItem?.id, "out")
                                  }
                                >
                                  <Text className="text-black-900 whitespace-nowrap font-mohrroundedaltregular hover:text-pink-800 font-normal hover:font-medium hover:font-mohrroundedaltmedium	text-base self-center rtl:text-right">
                                    {CUSTOM.getdataByLangKey(
                                      mainCatItem?.categoryLocales,
                                      CUSTOM.getDefaultLanguage(),
                                      "name"
                                    )}
                                  </Text>
                                  {mainCatItem?.subcategories?.length > 0 ? (
                                    <>
                                      <Img
                                        className="h-6 object-contain w-6 min-w-[1.5rem] rtl:rotate-180"
                                        src="/images/arrow_forward.svg"
                                        alt="rabbitholelogo"
                                      />
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    </div>

                    {getAllCatData?.map((catItem, catIndex) => {
                      return (
                        <>
                          <div
                            key={`more-sub-sub-key${catItem?.id}`}
                            className={`flex flex-col pt-2.5 pb-7 pl-9 sm:py-0 w-full border-l sm:border-none h-full max-h-[445px] overflow-auto more-main-sub-${catItem?.id} hidden more-hide-category1 hidesubsubmorecate`}
                            onMouseEnter={() =>
                              handleMoreCategory(catItem?.id, "in")
                            }
                          >
                            <ul className="flex flex-col">
                              {catItem?.subcategories?.map((moreSubItems) => {
                                return (
                                  <>
                                    <li
                                      className="px-6 py-2.5"
                                      key={`more-sub-sub-key${moreSubItems?.id}`}
                                      onMouseEnter={() =>
                                        handleMoreSubCategory(
                                          moreSubItems?.id,
                                          "in"
                                        )
                                      }
                                      onMouseLeave={() =>
                                        handleMoreCategory(
                                          moreSubItems?.id,
                                          "out"
                                        )
                                      }
                                    >
                                      <Text
                                        className="text-black-900 whitespace-nowrap font-mohrroundedaltregular hover:text-pink-800 font-normal hover:font-medium hover:font-mohrroundedaltmedium	text-base self-center rtl:text-right"
                                        onClick={(e) => {
                                          closeMenutoggle();
                                          navigate(
                                            `/productlist/${moreSubItems?.slug}`
                                          );
                                        }}
                                      >
                                        {CUSTOM.getdataByLangKey(
                                          moreSubItems?.categoryLocales,
                                          CUSTOM.getDefaultLanguage(),
                                          "name"
                                        )}
                                      </Text>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                          {catItem?.subcategories?.map((subsubitems) => {
                            return (
                              <>
                                <div
                                  key={`sakjdklsa${subsubitems?.id}`}
                                  className={`flex flex-col more-main-sub-sub-${subsubitems?.id} hidden pt-2.5 pb-7 pl-9 sm:py-0 w-full border-l sm:border-none h-full max-h-[445px] overflow-auto more-hide-category hidesubsubmorecate`}
                                  onMouseEnter={() =>
                                    handleMoreSubCategory(subsubitems?.id, "in")
                                  }
                                  onMouseLeave={() =>
                                    handleMoreSubCategory(
                                      subsubitems?.id,
                                      "out"
                                    )
                                  }
                                >
                                  <ul className="flex flex-col">
                                    {subsubitems?.subsubcategories?.map(
                                      (subsubitem) => {
                                        return (
                                          <>
                                            <li
                                              className="px-6 py-2.5"
                                              key={`more-sub-sub-key${subsubitem?.id}`}
                                            >
                                              <Text
                                                className="text-black-900 whitespace-nowrap font-mohrroundedaltregular hover:text-pink-800 font-normal hover:font-medium hover:font-mohrroundedaltmedium	text-base self-center rtl:text-right"
                                                onClick={(e) => {
                                                  closeMenutoggle();
                                                  navigate(
                                                    `/productlist/${subsubitem?.slug}`
                                                  );
                                                }}
                                              >
                                                {CUSTOM.getdataByLangKey(
                                                  subsubitem?.categoryLocales,
                                                  CUSTOM.getDefaultLanguage(),
                                                  "name"
                                                )}
                                              </Text>
                                            </li>
                                          </>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </div>
                </div>
              </li>
            </>
          ) : (
            ""
          )}
          <li className="flex hidden sm:block">
            <Button className="cursor-pointer font-mohrroundedaltmedium py-1 px-2 border border-pink-800 rounded text-center text-pink-800 text-sm leading-6 self-center">
              Design My Cake
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export { NavMenu };
