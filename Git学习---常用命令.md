### Git常用命令
命令|说明
----|----
git init | 新建
git add | 新添文件到仓库
git commit -m 'xxx' | -m 添加提交备注
commit|为什么Git添加文件需要add，commit一共两步呢？因为commit可以一次提交很多文件，所以你可以多次add不同的文件
git status | 查看仓库文件状态
git diff <fileName> | 查看修改内容
git log | 查看版本记录
git log --pretty=oneline | 简略查看版本记录
git reset --hard HEAD | `上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。`
git reset --hard | 回滚版本库
git reflog | 记录命令
git checkout -- <fileName> | 将文件在工作区的修改全部撤销
git reset HEAD <fileName> | 可以吧暂存区的修改回退到工作区 使用HEAD时 表示最新版本
rm <fileName> | 删除文件
git rm <fileName> 并 git commit <fileName> | 从版本库中删除文件
git checkout -- <fileName> | 用版本库里的版本替换工作区的版本 == 一键还原
git remote add origin git@server-name:path/repo-name.git | 关联远程仓库
git push -u origin master | 第一次推送master分支的所有内容
git push origin master | 推送最新修改
git pull | 从远程拉去最新版本到工作空间
git checkout -- <fileName> | 用版本库里的版本替换工作区的版本 == 一键还原
git clone github@url | 从远程库拷贝项目到本地文件夹
git checkout -b <name> === git branch <name>, git checkout <name> | 创建新分支 <name> 并切换到新分支
git branch | 查看所有分支 当前分支前 * 标记
git merge <name> | 合并分支 指定分支内容 合并到当前分支 ---> <name>(目前指定分支)
git branch -d <name> | 删除指定分支 <name>(目前指定分支) Fast-forward(快进模式) 直接把master指向<name>的当前提交
git log --graph | 查看分支合并图
Fast forward| Fast forward模式 删除分支后 会丢掉分支信息
git merge --no-ff -m "XXX" <name> | --no-ff参数，表示禁用Fast forward -m参数 把commit描述写进去
git stash | 把当前工作现场“储藏”起来 恢复现场后继续工作 
git stash list | 查看"储藏"起来的工作现场
git stash apply  | 恢复工作现场后 不删除记录
git stash drop | 删除储藏现场的记录
git stash pop | 恢复 并删除记录
git stash apply stash@{0} | 可以多次stash 并可以恢复指定stash
git branch -D feature-vulcan | 强行删除指定分支
git remote -v | 查看远程仓库名称
分支的作用| master分支是主分支，因此要时刻与远程同步；
分支的作用| dev分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
分支的作用| bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
分支的作用| feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。
多人协作模式| 1.用git push origin branch-name推送自己的修改
多人协作模式| 2.推送失败 则因为远程分支比你的本地更新 需要先用git pull试图合并
多人协作模式| 3.合并有冲突 解决冲突 在本地提交
多人协作模式| 4.没有冲突或者解决掉冲突后 用git push origin branch-name推送
多人协作模式| 5.如果git pull提示“no tracking information” 说明本地分支和远程分支的链接关系没有创建 用命令git branch --set-upstream branch-name origin/branch-name。
git tag <name> | 打一个新标签
git tag | 查看所有标签
git show <tagName> |可查看指定标签详细信息
git tag -a <tagname> -m "XXX..." | 可以指定标配信息
git tag -d <tagNmae> | 可以删除指定标签
git push origin <tagName> | 推送标签到远程服务器
git push origin --tags | 推送本地全部标签到远程服务器
git push origin :refs/tags/<tagName> | 删除远程服务器标签 ---> 首先删除本地标签
git config --global color.ui true | git显示颜色
git add -f <fileName> | 强制添加文件
git config --list |查看 git 的配置信息
git config --global core.quotepath false | 不对 0x80 以上的字符进行转义 中文乱码时使用
提示| git命令别名 ---> 英文好&&熟练的同学可以这样干
提示| Git配置文件都放在.git/config文件中
提示| 可修改git配置文件 例如 git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
user执行 | git执行 
git lg | log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
说明| 加上--global是针对当前用户起作用的 不加 只针对当前的仓库起作用
> 鼓励偷懒!!!
---

### .gitignore配置
git| .gitignore配置
:---:|---
“/”开头| 以斜杠“/”开头表示目录；
* | 以星号“*”通配多个字符；
? | 以问号“?”通配单个字符
[]| 以方括号“[]”包含单个字符的匹配列表；
! | 以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；
<fileName>/* | 忽略所有<fileName>文件下的全部内容
/<fileName>/* | 忽略更目录下的<fileName>下的全部内容
/*  | 忽略全部内容
!<fileName>  | 不忽略<filName>
---

### NPM
命令 | 说明
-----|-----
npm config set registry <url> | 更换访问地址 
---