const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
  it("can be initialized", () => {
    const list = new LinkedList("a", "b", "c", "d");

    expect(list).toHaveLength(4);
    expect(list.head.item).toBe("a");
  });

  describe("isEmpty", () => {
    it("should return whether list is empty", () => {
      const list1 = new LinkedList("a", "b", "c");
      expect(list1.isEmpty()).toBe(false);

      const list2 = new LinkedList();
      expect(list2.isEmpty()).toBe(true);
    });
  });

  describe("insert", () => {
    it("should insert in tail when index isn't given", () => {
      const list = new LinkedList("a");

      list.insert("b");
      expect(list).toHaveLength(2);
      expect(list.head.next.item).toBe("b");
      expect(list.head.next.next).toBeNull();
    });

    it("should insert in head when index is `0`", () => {
      const list = new LinkedList("b", "c", "d");

      list.insert("a", 0);
      expect(list).toHaveLength(4);
      expect(list.head.item).toBe("a");
      expect(list.head.next.item).toBe("b");
    });

    it("should insert in specific index when given index", () => {
      const list = new LinkedList("a", "b", "c", "d");

      list.insert("e", 2);
      expect(list).toHaveLength(5);
      expect(list.head.next.next.item).toBe("e");
      expect(list.head.next.next.next.item).toBe("c");
    });

    it("should throw error when index less than zero", () => {
      const list = new LinkedList("a", "b", "c");

      expect(() => {
        list.insert("d", -1);
      }).toThrow("invalid insert index");
    });

    it("should throw error when index greater than list length", () => {
      const list = new LinkedList("a", "b", "c");

      expect(() => {
        list.insert("d", 5);
      }).toThrow("invalid insert index");
    });
  });

  describe("get", () => {
    it("should get the item by given index", () => {
      const list = new LinkedList("a", "b", "c");
      expect(list.get(1).item).toBe("b");
      expect(list.get(2).item).toBe("c");
    });

    it("should throw error when given index is greater then list length", () => {
      const list = new LinkedList("a", "b", "c");
      expect(() => {
        list.get(4);
      }).toThrow("Exceed list length");
    });
  });

  describe("indexOf", () => {
    it("should get the index by given item", () => {
      const list = new LinkedList("a", "b", "c");
      expect(list.indexOf("b")).toBe(1);
      expect(list.indexOf("c")).toBe(2);
    });

    it("should return null when can't find the given item", () => {
      const list = new LinkedList("a", "b", "c");
      expect(list.indexOf("d")).toBeNull();
    });
  });

  describe("remove", () => {
    it("could remove head node", () => {
      const list = new LinkedList("a", "b", "c");
      list.remove(0);
      expect(list).toHaveLength(2);
    });

    it("could remove specific node", () => {
      const list = new LinkedList("a", "b", "c");
      list.remove(1);
      expect(list).toHaveLength(2);
      expect(list.head.next.item).toBe("c");
    });

    it("should throw error when given index is greater than list length - 1", () => {
      const list = new LinkedList("a", "b", "c");
      expect(() => {
        list.remove(3);
      }).toThrow("invalid remove index");
    });
  });
});
