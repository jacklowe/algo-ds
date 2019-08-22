class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      throw new Error("Vertex already present in graph");
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      throw new Error("At least one vertex not in graph");
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(vertex) {
    let vertices = [];
    let visited = {};

    const dfs = v => {
      visited[v] = true;
      vertices.push(v);

      const neighbours = this.adjacencyList[v];
      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          dfs(neighbour);
        }
      }
    };
    dfs(vertex);

    return vertices;
  }

  dfsIterative(vertex) {
    let stack = [];
    let vertices = [];
    let visited = {};

    stack.push(vertex);
    visited[vertex] = true;

    while (stack.length) {
      const v = stack.pop();
      vertices.push(v);

      const neighbours = this.adjacencyList[v];
      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          stack.push(neighbour);
          visited[neighbour] = true;
        }
      }
    }
    return vertices;
  }

  bfs(vertex) {
    let queue = [];
    let vertices = [];
    let visited = {};

    queue.push(vertex);
    visited[vertex] = true;

    while (queue.length) {
      const v = queue.shift();
      vertices.push(v);

      const neighbours = this.adjacencyList[v];
      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          queue.push(neighbour);
          visited[neighbour] = true;
        }
      }
    }
    return vertices;
  }
}
// recursive approach a bit less finicky

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));
