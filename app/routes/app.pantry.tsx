import { ActionFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  json,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import classNames from "classnames";
import { PrimaryButton } from "~/components/form";
import { PlusIcon, SearchIcon } from "~/components/icons";
import { createShelf, getAllShelves } from "~/models/pantry-shelf.server";

export const action: ActionFunction = async () => {
  return await createShelf();
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const shelves = await getAllShelves(q);
  return json({ shelves });
}

export default function Pantry() {
  const data = useLoaderData<typeof loader>();
  const [URLSearchParams] = useSearchParams();
  const navigation = useNavigation();

  const isLoading = navigation.formData?.has("q");
  const isCreatingShelf = navigation.formData?.has("createShelf");

  return (
    <div>
      <Form
        className={classNames(
          "flex  border-2 p-2 rounded-md items-center mt-4 md:w-96",
          "focus-within:border-primary",
          isLoading ? "animate-pulse" : ""
        )}
      >
        <button
          type="submit"
          className={classNames("border-none cursor-pointer")}
        >
          <SearchIcon />
        </button>
        <input
          type="text"
          name="q"
          defaultValue={URLSearchParams.get("q") ?? ""}
          placeholder="Search Shelves..."
          autoComplete="off"
          className="border-none outline-none ml-2 flex-1"
        />
      </Form>
      <Form method="post" className="mt-4">
        <PrimaryButton
          name="createShelf"
          className={classNames(
            "w-full md:w-fit",
            isCreatingShelf && "bg-primary-light"
          )}
        >
          <PlusIcon />
          <span className="pl-2">
            {isCreatingShelf ? "Creating Shelf" : "Create Shelf"}
          </span>
        </PrimaryButton>
      </Form>
      <div
        className={classNames(
          "flex py-4 gap-8 overflow-auto snap-x snap-mandatory "
        )}
      >
        {data.shelves.map((shelf) => (
          <div
            key={shelf.id}
            className={classNames(
              "border-2 border-primary p-4 rounded-md w-[calc(100vw-3rem)] md:w-96",
              "flex-none snap-center h-fit"
            )}
          >
            <h2 className="font-bold text-2xl">{shelf.name}</h2>
            <ul>
              {shelf.items.map((item) => (
                <li key={item.id} className="pt-4 text-lg">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
