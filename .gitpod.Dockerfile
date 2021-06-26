FROM gitpod/workspace-full:latest

RUN bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"

RUN \
  cd /tmp &&\
  wget https://download.jetbrains.com/fonts/JetBrainsMono-2.225.zip &&\
  unzip JetBrainsMono-2.225.zip &&\
  cp -Rf fonts/* /usr/share/fonts &&\
  fc-cache -f -v
