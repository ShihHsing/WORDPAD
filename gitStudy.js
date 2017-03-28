git init // 新建
git add // 新添文件到仓库
git commit -m 'xxx' // -m 添加提交备注
//为什么Git添加文件需要add，commit一共两步呢？因为commit可以一次提交很多文件，所以你可以多次add不同的文件
git status // 查看仓库文件状态
git diff <fileName> // 查看修改内容
git log // 查看版本记录
git log --pretty=oneline // 简略查看版本记录
git reset --hard HEAD // 上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
git reset --hard // 回滚版本库
git reflog // 记录命令
git checkout -- <fileName> // 将文件在工作区的修改全部撤销
git reset HEAD <fileName> // 可以吧暂存区的修改回退到工作区 使用HEAD时 表示最新版本
rm <fileName> // 删除文件
git rm <fileName> 并 git commot <fileName> // 从版本库中删除文件
git checkout -- <fileName> // 用版本库里的版本替换工作区的版本 == 一键还原
git remote add origin git@server-name:path/repo-name.git // 关联远程仓库
git push -u origin master // 第一次推送master分支的所有内容
git push origin master // 推送最新修改
git checkout -- <fileName> // 用版本库里的版本替换工作区的版本 == 一键还原
git clone github@url // 从远程库拷贝项目到本地文件夹