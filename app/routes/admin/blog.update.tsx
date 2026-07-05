import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";
import { useState } from "react";
import { blogService } from "~/services/blogService";
import { v4 as uuidv4 } from "uuid";
import { Minus, Image as ImageIcon } from "lucide-react";

import type { IBlogModel } from "~/models/blog";
import MarkdownEditor from "~/components/MarkdownEditor";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.blogId;
  if (!id) throw new Error("Blog ID is required");

  const blog = await blogService.getById(id);
  if (!blog) throw new Error("Blog not found");

  return { blog };
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const id = params.blogId;
  if (!id) return { error: "Missing blog ID" };

  const formData = await request.formData();

  const title = formData.get("title")?.toString() || "";
  const slug = formData.get("slug")?.toString() || "";
  const excerpt = formData.get("excerpt")?.toString() || "";
  const tags = formData.get("tags")?.toString() || "";
  const author = formData.get("author")?.toString() || "";
  const contents = formData.get("contents")?.toString() || "";

  const imagesJSON = formData.get("imagesJSON")?.toString() || "[]";
  const images = JSON.parse(imagesJSON);

  if (!title || !slug || !contents)
    return { error: "Title, slug, and contents are required." };

  const updatedBlog : IBlogModel = {
    title,
    slug,
    excerpt,
    tags,
    author,
    contents,
    images,
    publish_at : new Date().toISOString().split("T")[0],
  };

  await blogService.update(id, updatedBlog);

  return redirect("/blogs");
};

export default function BlogUpdatePage() {
  const actionData = useActionData<typeof action>();
  const { blog } = useLoaderData<typeof loader>();

  const [form, setForm] = useState({
    title: blog.title || "",
    slug: blog.slug || "",
    excerpt: blog.excerpt || "",
    tags: blog.tags || "",
    author: blog.author || "",
    contents: blog.contents || "",
  });

  const [images, setImages] = useState<string[]>(blog.images || []);
  const [searchImage, setSearchImage] = useState("");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const generateSlug = (title: string) => {
    const base = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    const shortId = uuidv4().split("-")[0];
    return `${base}-${shortId}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        slug: generateSlug(value),
        [name]: value,
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleOpenModal = () => {
    setSelectedImages(images);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  const handleApplyImages = () => {
    setImages(selectedImages);
    handleCloseModal();
  };

  const images_file : any = [];

  const toggleSelect = (filename: string) => {
    const imageObject = images_file.find((i) => i.filename === filename);
    const imageUrl = `/images/${imageObject?.path || filename}`;

    setSelectedImages((prev) =>
      prev.includes(imageUrl)
        ? prev.filter((url) => url !== imageUrl)
        : [...prev, imageUrl]
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-[300] text-gray-900 mb-8">Update Blog</h1>

        {actionData?.error && (
          <p className="mb-4 text-red-600 text-sm bg-red-50 border border-red-200 p-3 rounded-lg">
            {actionData.error}
          </p>
        )}

        <Form method="post" className="space-y-6">
          <div>
            <label className="block text-gray-500 text-sm font-[300] mb-1.5">Title</label>
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 font-[300] focus:outline-none focus:border-[--primary-color] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-500 text-sm font-[300] mb-1.5">Slug</label>
            <input
              name="slug"
              type="text"
              value={form.slug}
              readOnly
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 placeholder-gray-400 font-[300] focus:outline-none focus:border-[--primary-color] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-500 text-sm font-[300] mb-1.5">Author</label>
            <input
              name="author"
              type="text"
              value={form.author}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 font-[300] focus:outline-none focus:border-[--primary-color] transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-sm font-[300] mb-1.5">Excerpt</label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 font-[300] focus:outline-none focus:border-[--primary-color] transition-colors h-24 resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-sm font-[300] mb-1.5">Tags</label>
            <input
              name="tags"
              type="text"
              value={form.tags}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 font-[300] focus:outline-none focus:border-[--primary-color] transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-sm font-[300] mb-1.5">Blog Images</label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={imageUrlInput}
                onChange={(e) => setImageUrlInput(e.target.value)}
                placeholder="Paste image URL..."
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 font-[300] text-sm focus:outline-none focus:border-[--primary-color] transition-colors"
              />
              <button
                type="button"
                onClick={() => {
                  if (imageUrlInput.trim()) {
                    setImages((prev) => [...prev, imageUrlInput.trim()]);
                    setImageUrlInput("");
                  }
                }}
                className="bg-gray-900 text-white font-[300] rounded-xl px-4 transition-all duration-300 hover:bg-gray-700 text-sm cursor-pointer"
              >
                Add
              </button>
              <button
                type="button"
                onClick={handleOpenModal}
                className="flex items-center gap-2 bg-gray-900 text-white font-[300] rounded-xl py-2.5 px-5 transition-all duration-300 hover:bg-gray-700 text-sm cursor-pointer"
              >
                <ImageIcon size={16} /> Browse ({images.length})
              </button>
            </div>

            {images.length > 0 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {images.map((url, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={url}
                      alt={`Selected ${idx + 1}`}
                      className="w-full h-24 object-cover border border-gray-200 rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setImages((prev) => prev.filter((_, i) => i !== idx))}
                      className="absolute top-1 right-1 w-6 h-6 bg-black/60 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <input type="hidden" name="imagesJSON" value={JSON.stringify(images)} />

          <div>
            <label className="block text-gray-500 text-sm font-[300] mb-1.5">Article Contents</label>
            <MarkdownEditor
              name="contents"
              value={form.contents}
              onChange={(v) => setForm((p) => ({ ...p, contents: v }))}
              minHeight="500px"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-[300] rounded-xl py-3 px-6 transition-all duration-300 hover:bg-gray-700 cursor-pointer"
          >
            Update Blog
          </button>
        </Form>
      </div>

      {isOpen && (
        <section className="w-full h-screen fixed bg-black/30 top-0 left-0 z-[99] flex items-center justify-center">
          <div className="bg-white rounded-xl w-full h-full max-w-[80vw] max-h-[80vh] p-5 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-[300] text-gray-900">Select Blog Images</h2>
              <button
                className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                onClick={handleCloseModal}
              >
                <Minus size={22} className="text-zinc-400" />
              </button>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="text-sm text-gray-400 font-[300]">
                {selectedImages.length} selected
              </div>
              <div>
                <input type="text" onChange={(e) => setSearchImage(e.target.value)} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="Search" />
              </div>
            </div>

            <div className="overflow-auto h-[65vh] mt-5 flex flex-wrap gap-3">
              {images_file.filter(item => item.filename.includes(searchImage)).map((item) => {
                const imageUrl = `/images/${item.path}`;
                const active = selectedImages.includes(imageUrl);

                return (
                  <div
                    key={item.filename}
                    onClick={() => toggleSelect(item.filename)}
                    className={`cursor-pointer max-w-[150px] relative rounded-lg overflow-hidden border-4 transition-all duration-150 ${
                      active ? "border-[--primary-color]" : "border-transparent"
                    }`}
                  >
                    <img
                      src={imageUrl}
                      className="w-full h-full object-cover"
                    />
                    {active && (
                      <div className="absolute inset-0 bg-[--primary-color]/20"></div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-3 border-t border-gray-200 mt-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 mr-3 text-gray-500 rounded hover:bg-gray-100 cursor-pointer font-[300]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApplyImages}
                className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 cursor-pointer font-[300]"
              >
                Apply ({selectedImages.length})
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
