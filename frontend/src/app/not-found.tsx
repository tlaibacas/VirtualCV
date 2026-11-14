import WrongLang from "@/components/dialogs/wrongLang/WrongDialog";

export const value = "WRONG_LANG";
export default function NotFound(val?: string) {
  if (val === value) {
    <WrongLang val={val} />;
  }

  return (
    <html lang="en">
      <body>
        <h1>404 not found</h1>
      </body>
    </html>
  );
}
