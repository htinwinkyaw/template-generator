import { Paper, PaperModeEnum } from "@/types/template.type";

export const paperSizes: Paper[] = [
  {
    id: "p1",
    name: "US Legal",
    height: "36cm",
    width: "22cm",
    margin: "2cm",
    mode: PaperModeEnum.potrait,
  },
  {
    id: "p2",
    name: "US Legal",
    height: "22cm",
    width: "36cm",
    margin: "2cm",
    mode: PaperModeEnum.landscape,
  },
  {
    id: "p3",
    name: "A4",
    height: "29.7cm",
    width: "21cm",
    margin: "2cm",
    mode: PaperModeEnum.potrait,
  },
  {
    id: "p4",
    name: "A4",
    height: "21cm",
    width: "29.7cm",
    margin: "2cm",
    mode: PaperModeEnum.landscape,
  },
  {
    id: "p5",
    name: "A5",
    height: "21cm",
    width: "14.8cm",
    margin: "1.5cm",
    mode: PaperModeEnum.potrait,
  },
  {
    id: "p6",
    name: "A5",
    height: "14.8cm",
    width: "21cm",
    margin: "1.5cm",
    mode: PaperModeEnum.landscape,
  },
];
