
## Ubuntu Ruby/Tk 설치

Ruby 2.3 까지 Tk는 Ruby에 속해있었는데 Ruby 2.4부터는 별도의 gem으로 존재한다.

## Prereq
```
$ sudo apt-get update
$ sudo apt-get install tk tcl tk8.6-dev tcl8.6-dev
```

## Installation
```
gem install tk
```

Ruby의 extension은 C로 만들어졌고 이를 빌드하기 위해서는 configuration과 compile의 작업을 거친다.
보통 gem을 설치하는 과정에서 이 두 작업이 알아서 처리되는데 문제는 우분투에서 
Tcl/Tk 라이브러리 파일을 찾을수가 없어서 아래와 같은 에러가 뜬다.

```
ERROR:  Error installing tk:                                                                             
        ERROR: Failed to build gem native extension.                                                     
            current directory: /home/mui/gems/gems/tk-0.2.0/ext/tk                                               
# ...

Warning:: cannot find Tcl library. tcltklib will not be compiled (tcltklib is disabled on your Ruby. Tha$
         is, Ruby/Tk will not work). Please check configure options.                                             
Can't find proper Tcl/Tk libraries. So, can't make tcltklib.so which is required by Ruby/Tk.
If you have Tcl/Tk libraries on your environment, you may be able to use them with configure options (se$
         ext/tk/README.tcltklib).
At present, Tcl/Tk8.6 is not supported. Although you can try to use Tcl/Tk8.6 with configure options, it
will not work correctly. I recommend you to use Tcl/Tk8.5 or 8.4.

To see why this extension failed to compile, please check the mkmf.log which can be found here:

  /home/mui/gems/extensions/x86_64-linux/2.7.0/tk-0.2.0/mkmf.log

  extconf failed, exit code 1

  Gem files will remain installed in /home/mui/gems/gems/tk-0.2.0 for inspection.
  Results logged to /home/mui/gems/extensions/x86_64-linux/2.7.0/tk-0.2.0/gem_make.out
```

[Ruby Forum](https://www.ruby-forum.com/t/building-ext-tk-on-ubuntu-14-04/231470/5)에서 
해결책을 찾을 수 있는데 해당 extension이 경로를 심링크로 연결하면 된다.

```
$ sudo ln -s /usr/lib/x86_64-linux-gnu/tcl8.6/tclConfig.sh /usr/lib/tclConfig.sh
$ sudo ln -s /usr/lib/x86_64-linux-gnu/tk8.6/tkConfig.sh /usr/lib/tkConfig.sh
$ sudo ln -s /usr/lib/x86_64-linux-gnu/libtcl8.6.so.0 /usr/lib/libtcl8.6.so.0
$ sudo ln -s /usr/lib/x86_64-linux-gnu/libtk8.6.so.0 /usr/lib/libtk8.6.so.0
```

그리고 다시 gem을 설치하면 된다.

```
$ gem install tk

Building native extensions. This could take a while...
Successfully installed tk-0.2.0
Parsing documentation for tk-0.2.0
Installing ri documentation for tk-0.2.0
Done installing documentation for tk after 7 seconds

1 gem installed
```

reference
- https://saveriomiroddi.github.io/Installing-ruby-tk-bindings-gem-on-ubuntu/
