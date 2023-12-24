export type GridItemLayout = "1x1" | "1x2" | "2x1" | "2x2" | "4x2" | "2x4" | "2x3" | "4x4";

export interface GridItemInterface {
    layout : GridItemLayout;
    title?: string;
}

export const DesktopGridItems : GridItemInterface[] = [
    {
        layout: "2x2",
        title:"Short introduction",
    },
    {
        layout: "1x2",
        title:"photo album",
    },
    {
        layout: "1x2",
        title:"1x2",
    },
    {
        layout: "2x4",
        title:"description",
    },
    {
        layout: "2x3",
        title:"map",
    },
    {
        layout: "2x2",
        title:"2x2",
    },
    {
        layout: "1x1",
        title:"techStack",
    },
    {
        layout: "1x1",
        title:"digital space",
    },
]

export const MobileGridItems : GridItemInterface[] = [
    {
        layout: "2x2",
        title:"album",
    },
    {
        layout: "2x1",
        title:"short desciption",
    },
    {
        layout: "1x1",
        title:"digi space",
    },
    {
        layout: "1x1",
        title:"tech stack",
    },
    {
        layout: "4x2",
        title:"description",
    },
    {
        layout: "2x2",
        title:"2x2",
    },
    {
        layout: "2x2",
        title:"map",
    },
    {
        layout: "4x2",
        title:"2x4",
    },
   
]