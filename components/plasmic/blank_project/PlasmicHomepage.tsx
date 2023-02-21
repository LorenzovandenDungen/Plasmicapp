// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4UWuoUxBjJSz5QMN4ogHwp
// Component: R-08Ny1YzJ5W
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 4UWuoUxBjJSz5QMN4ogHwp/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: R-08Ny1YzJ5W/css

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  tv1?: p.Flex<"div">;
  frame7?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  frame3?: p.Flex<"div">;
  frame5?: p.Flex<"div">;
  rectangle1?: p.Flex<"div">;
  frame6?: p.Flex<"div">;
  rectangle2?: p.Flex<"div">;
  frame10?: p.Flex<"div">;
  frame8?: p.Flex<"div">;
  frame9?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"tv1"}
            data-plasmic-override={overrides.tv1}
            className={classNames(projectcss.all, sty.tv1)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame7"}
              data-plasmic-override={overrides.frame7}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame7)}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"292px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"488px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/blank_project/images/undrawLoginRe4Vu21.bin",
                  fullWidth: 488,
                  fullHeight: 292,
                  aspectRatio: 1.671233
                }}
              />

              <p.Stack
                as={"div"}
                data-plasmic-name={"frame3"}
                data-plasmic-override={overrides.frame3}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cvcbv
                  )}
                >
                  {"open the door"}
                </div>
              </p.Stack>
            </p.Stack>

            <div
              data-plasmic-name={"frame5"}
              data-plasmic-override={overrides.frame5}
              className={classNames(projectcss.all, sty.frame5)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7ArJs
                )}
              >
                {"Username"}
              </div>

              <div
                data-plasmic-name={"rectangle1"}
                data-plasmic-override={overrides.rectangle1}
                className={classNames(projectcss.all, sty.rectangle1)}
              />
            </div>

            <div
              data-plasmic-name={"frame6"}
              data-plasmic-override={overrides.frame6}
              className={classNames(projectcss.all, sty.frame6)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jc3Wk
                )}
              >
                {"Password"}
              </div>

              <div
                data-plasmic-name={"rectangle2"}
                data-plasmic-override={overrides.rectangle2}
                className={classNames(projectcss.all, sty.rectangle2)}
              />
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame10"}
              data-plasmic-override={overrides.frame10}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame10)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame8"}
                data-plasmic-override={overrides.frame8}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame8)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__za6Bp
                  )}
                >
                  {"login"}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                data-plasmic-name={"frame9"}
                data-plasmic-override={overrides.frame9}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame9)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tYqiJ
                  )}
                >
                  {"close"}
                </div>
              </p.Stack>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "tv1",
    "frame7",
    "img",
    "frame3",
    "frame5",
    "rectangle1",
    "frame6",
    "rectangle2",
    "frame10",
    "frame8",
    "frame9"
  ],
  tv1: [
    "tv1",
    "frame7",
    "img",
    "frame3",
    "frame5",
    "rectangle1",
    "frame6",
    "rectangle2",
    "frame10",
    "frame8",
    "frame9"
  ],
  frame7: ["frame7", "img", "frame3"],
  img: ["img"],
  frame3: ["frame3"],
  frame5: ["frame5", "rectangle1"],
  rectangle1: ["rectangle1"],
  frame6: ["frame6", "rectangle2"],
  rectangle2: ["rectangle2"],
  frame10: ["frame10", "frame8", "frame9"],
  frame8: ["frame8"],
  frame9: ["frame9"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  tv1: "div";
  frame7: "div";
  img: typeof p.PlasmicImg;
  frame3: "div";
  frame5: "div";
  rectangle1: "div";
  frame6: "div";
  rectangle2: "div";
  frame10: "div";
  frame8: "div";
  frame9: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tv1: makeNodeComponent("tv1"),
    frame7: makeNodeComponent("frame7"),
    img: makeNodeComponent("img"),
    frame3: makeNodeComponent("frame3"),
    frame5: makeNodeComponent("frame5"),
    rectangle1: makeNodeComponent("rectangle1"),
    frame6: makeNodeComponent("frame6"),
    rectangle2: makeNodeComponent("rectangle2"),
    frame10: makeNodeComponent("frame10"),
    frame8: makeNodeComponent("frame8"),
    frame9: makeNodeComponent("frame9"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
