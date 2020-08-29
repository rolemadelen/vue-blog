
## Priority Queue
PQueue is simply a queue with following extensions
1. every node has a priority associated with it
2. highest priority node will be dequeued first
3. if two elements have the same priority, they are served according to their order in the queue.

Operations:
1. insert(data, priority)
2. get_highest_priority()
3. delete_highest_priority()

structure of a data
```rb
class Data
  attr_accessor :data, :priority
end
```

or simply
```rb
@data = [_data, _priority]
```

3 ways to implement
1. array
2. Linked Lists: [GitHub](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/priority-queue/linked-list/pqueue.rb)
2. heap (preferred) - better performance compare to arrays or linked lists
