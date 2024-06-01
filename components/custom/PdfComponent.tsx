"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const PdfComponent = () => {
  let pdfPath = "/pdf/Ok.pdf#toolbar=0";
  const handleDownload = () => {
    // You can use any method to trigger the download, such as creating an invisible link and clicking it
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "OkResume.pdf";
    link.click();
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Resume</Button>
        </DialogTrigger>
        <DialogContent className="scrollt  sm:max-w-[650px] ">
          <DialogHeader>
            <DialogTitle>My resume</DialogTitle>
          </DialogHeader>
          <div className="scrollt ">
            <object
              type="application/pdf"
              width="100%"
              height="500px"
              data="/pdf/Ok.pdf#toolbar=0"
              className="w-full "
            />
          </div>
          <DialogFooter>
            <Button onClick={handleDownload}>Download</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PdfComponent;
